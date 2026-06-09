const productSchema = require("../models/productSchema")
const { cloudUpload, cloudDelete } = require("../services/cloudUpload")
const resHandler = require("../utils/resHandler")

// =============== Create Product ==================
const createProduct = async (req, res) => {
    try {
        const { title, slug, description, category, price, discountPercentage, badge, shipping, stock, isFeatured } = req.body
        let size = [];
        let color = [];
        let tags = [];

        if (req.body.size) size = JSON.parse(req.body.size);
        if (req.body.color) color = JSON.parse(req.body.color);
        if (req.body.tags) tags = JSON.parse(req.body.tags);

        const thumbnail = req.files?.thumbnail?.[0]
        const images = req.files?.images

        // ---------- Validation ----------
        if (!title) return resHandler.error(res, 400, 'Title is required')
        if (!price) return resHandler.error(res, 400, 'price is required')
        // Slug 
        if (!slug) return resHandler.error(res, 400, 'Slug is required')
        if (!stock) return resHandler.error(res, 400, 'stock is required')
        const existSlug = await productSchema.findOne({ slug: slug.toLowerCase() })
        if (existSlug) return resHandler.error(res, 400, 'Slug with this name already exists')
        if (!description) return resHandler.error(res, 400, 'Description is required')
        // category 
        if (!category) return resHandler.error(res, 400, 'Category is required')

        // arrays 
        if (size.length == 0) return resHandler.error(res, 400, 'At least one size is required')
        if (color.length == 0) return resHandler.error(res, 400, 'At least one color is required')

        // ---------- Upload images ----------
        if (!thumbnail) return resHandler.error(res, 400, 'Product thumbnail is required')
        const thumbRes = await cloudUpload({ file: thumbnail, folderPath: "tenshiwear/products", folder: "product" })

        const imageUrls = []
        if (images) {
            for (const img of images) {
                const uploadRes = await cloudUpload({ file: img, folderPath: "tenshiwear/products", folder: "product" })
                imageUrls.push(uploadRes.secure_url)
            }
        }

        // ---------- Save to DB ----------
        const product = productSchema({
            title,
            slug,
            description,
            category,
            price,
            discountPercentage,
            size,
            color,
            images: imageUrls,
            thumbnail: thumbRes.secure_url,
            badge,
            shipping,
            tags,
            stock,
            isFeatured,
        })
        product.save()

        // ------------ Success 
        resHandler.success(res, 201, "Product created successfully")
    } catch (error) {
        resHandler.error(res, 500, 'Internal Server Error')
    }
}

// =============== Get all Product ==================
const getAll = async (req, res) => {
    try {
        // --------- query
        const categorySlug = req.query.category
        const search = req.query.search || ""
        const minPrice = parseFloat(req.query.minPrice) || 0
        const maxPrice = parseFloat(req.query.maxPrice) || Infinity
        const limit = parseInt(req.query.limit) || 10
        const page = parseInt(req.query.page) || 1
        const skip = (page - 1) * limit

        // --------- Search and Pipeline
        const pipline = [
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                }
            },
            { $unwind: "$category" },
            { 
                $match: { 
                    "isActive": true, 
                    ...(categorySlug && { "category.slug": categorySlug }),
                    title: { $regex: search, $options: "i" },
                    price: { $gte: minPrice, $lte: maxPrice }
                } 
            },
            { $sort: { createdAt: -1 } },
            {
                $facet: {
                    metadata: [{ $count: "total" }],
                    data: [
                        { $skip: skip },
                        { $limit: limit },
                        { $project: { __v: 0, isActive: 0, updatedAt: 0, "category.__v": 0, "category.isActive": 0, "category._id": 0 } }
                    ]
                }
            }
        ]

        // ---------- Find product 
        const result = await productSchema.aggregate(pipline)
        const products = result[0].data
        const totalProducts = result[0].metadata[0]?.total || 0
        const totalPages = Math.ceil(totalProducts / limit)

        // ---------- Success 
        resHandler.success(res, 201, "", {
            products,
            pagination: {
                total: totalProducts,
                showing: products?.length || 0,
                page,
                limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        })
    } catch (error) {
        console.log(error)
        resHandler.error(res, 500, 'Internal Server Error')
    }
}

// =============== Get all Product ==================
const getFeatured = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10

        // ---------- Find product 
        const products = await productSchema.find({ isFeatured: true }).limit(limit)
        if (!products) return resHandler.error(res, 404, "No products available")

        // ---------- Success 
        resHandler.success(res, 201, "Product fetched", products)
    } catch (error) {
        resHandler.error(res, 500, 'Internal Server Error')
    }
}

// =============== Get Single Product ==================
const getSingle = async (req, res) => {
    try {
        const { slug } = req.params

        // ------- Find from DB
        const product = await productSchema.findOne({ slug }).select("-__v -isActive -updatedAt ")
        if (!product) return resHandler.error(res, 404, "Couldn't found any product")

        // --------- Success 
        resHandler.success(res, 200, "", { product })
    } catch (error) {
        resHandler.error(res, 500, 'Internal Server Error')
    }
}

// =============== Update Product ==================
const updateProduct = async (req, res) => {
    try {
        const productSlug = req.params.slug
        const thumbnail = req.files?.thumbnail?.[0]
        const images = req.files?.images
        const { title, description, category, price, discountPercentage, badge, shipping, stock, isFeatured } = req.body
        let destroyImg = [];
        let size = [];
        let color = [];
        let tags = [];

        if (req.body.size) size = JSON.parse(req.body.size);
        if (req.body.color) color = JSON.parse(req.body.color);
        if (req.body.tags) tags = JSON.parse(req.body.tags);
        if (req.body.destroyImg) destroyImg = JSON.parse(req.body.destroyImg);
        // ---------- Validation ----------
        if (size && size.length > 0 && !Array.isArray(size)) return resHandler.error(res, 400, 'Size must be an array')
        if (color && color.length > 0 && !Array.isArray(color)) return resHandler.error(res, 400, 'Color must be an array')
        if (category) {
            const existCategory = await categorySchema.findById(category)
            if (!existCategory) return resHandler.error(res, 400, "Invalid category or doesn't exist")
        }
        if (tags && tags?.length > 0 && !Array.isArray(tags)) return resHandler.error(res, 400, "Tags must be in array or syntax error")

        // ------- Find from DB
        const existingProduct = await productSchema.findOne({ slug: productSlug })
        if (!existingProduct) return resHandler.error(res, 404, "Couldn't found any product")

        // ------- Changes
        if (title) existingProduct.title = title
        if (description) existingProduct.description = description
        if (category) existingProduct.category = category
        if (price) existingProduct.price = price
        if (discountPercentage !== undefined) existingProduct.discountPercentage = discountPercentage
        if (size && size.length > 0) existingProduct.size = size
        if (color && color.length > 0) existingProduct.color = color
        if (stock !== undefined) existingProduct.stock = stock
        if (badge !== undefined) existingProduct.badge = badge
        if (shipping) existingProduct.shipping = shipping
        if (isFeatured !== undefined) existingProduct.isFeatured = isFeatured
        if (tags && tags.length > 0) existingProduct.tags = tags


        // ------------ Thumbnail -------------
        if (thumbnail) {
            cloudDelete({ folder: "thumbnail", file: existingProduct.thumbnail }) // --- Delete previous thumbnail
            const cloudRes = await cloudUpload({ file: thumbnail, folderPath: "rexify/products", folder: "product" })
            existingProduct.thumbnail = cloudRes.secure_url
        }

        // ------------ Images -------------
        let updatedImageUrls = []

        let totalImages = existingProduct.images.length
        if (destroyImg.length > 0) totalImages -= destroyImg.length
        if (Array.isArray(images) && images?.length > 0) totalImages += images.length
        if (totalImages > 4) return resHandler.error(res, 400, "You can upload maximum of 4 images")


        if (Array.isArray(destroyImg) && destroyImg.length > 0) {
            for (const imgs of destroyImg) {
                cloudDelete({ folder: "product", file: imgs }) // --- Delete previous images
            }
        }

        if (images && images.length > 0) {
            for (const img of images) {
                const uploadRes = await cloudUpload({ file: img, folderPath: "tenshiwear/products", folder: "product" })
                updatedImageUrls.push(uploadRes.secure_url)
            }

        }

        const filteredImg = existingProduct.images.filter((item) => {
            return !destroyImg.includes(item)
        })

        updatedImageUrls = updatedImageUrls.concat(filteredImg)
        existingProduct.images = updatedImageUrls

        // ---- Save
        existingProduct.save()

        // --------- Success 
        resHandler.success(res, 200, "Product updated successfully")
    } catch (error) {
        console.log(error)
        resHandler.error(res, 500, 'Internal Server Error')
    }
}

// =============== Delete Product ==================
const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.body

        // ---------- Validation ----------
        if (!productId) return resHandler.error(res, 400, 'Product ID is required')


        // ------- Find from DB
        const existingProduct = await productSchema.findById(productId)
        if (!existingProduct) return resHandler.error(res, 404, "Coudn't found any product")


        // ------------ Thumbnail -------------
        cloudDelete({ folder: "thumbnail", file: existingProduct.thumbnail }) // --- Delete previous thumbnail

        for (const imgs of existingProduct.images) {
            cloudDelete({ folder: "product", file: imgs }) // --- Delete previous images
        }

        await productSchema.findByIdAndDelete(productId)

        // --------- Success 
        resHandler.success(res, 200, "Product deleted successfully")
    } catch (error) {
        resHandler.error(res, 500, 'Internal Server Error')
    }
}


module.exports = { createProduct, getAll, getFeatured, getSingle, updateProduct, deleteProduct }