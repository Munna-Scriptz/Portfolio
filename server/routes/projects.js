const express = require('express')
const router = express.Router()
const { createProduct, getAll, getSingle, updateProduct, deleteProduct, getFeatured } = require("../controllers/ProjectsController")
const authMiddleware = require('../middleware/authMiddleware')
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware')
const multer = require('multer')
const upload = multer()


router.post('/add', authMiddleware, roleCheckMiddleware("admin"), upload.single('thumbnail'), createProduct)
router.put('/update/:slug', authMiddleware, roleCheckMiddleware("admin"), upload.single('thumbnail'), updateProduct)
router.delete('/delete', authMiddleware, roleCheckMiddleware("admin"), deleteProduct)

router.get("/", getAll)
router.get("/featured", getFeatured)
router.get("/:slug", getSingle)


module.exports = router