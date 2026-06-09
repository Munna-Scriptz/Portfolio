const express = require('express')
const router = express.Router()
const { createProduct, getAll, getSingle, updateProduct, deleteProduct, getFeatured } = require("../controllers/productController")
const authMiddleware = require('../middleware/authMiddleware')
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware')
const multer = require('multer')
const upload = multer()


router.post('/create', authMiddleware, roleCheckMiddleware("admin"), upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'images', maxCount: 4 }]), createProduct)
router.put('/update/:slug', authMiddleware, roleCheckMiddleware("admin"), upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'images', maxCount: 4 }]), updateProduct)
router.delete('/delete', authMiddleware, roleCheckMiddleware("admin"), deleteProduct)

router.get("/", getAll)
router.get("/featured", getFeatured)
router.get("/:slug", getSingle)


module.exports = router