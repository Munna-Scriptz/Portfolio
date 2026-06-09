const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'category',
        required: true,
    },
    discountPercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    size: [
        {
            type: String,
            required: true
        }
    ],
    color: [
        {
            name: String,
            code: String
        }
    ],
    badge: {
        type: String
    },
    shipping: {
        type: String,
        default: "Ships in 2-3 business days"
    },
    soldCount: {
        type: Number,
        default: 0
    },
    tags: [
        {
            type: String,
        },
    ],
    thumbnail: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
        },
    ],
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true,
    }

}, { timestamps: true });

module.exports = mongoose.model('product', productSchema)