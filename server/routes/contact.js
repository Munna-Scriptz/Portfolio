const express = require('express')
const router = express.Router()
const { sendContact } = require('../controllers/contactController')
const authMiddleware = require('../middleware/authMiddleware')
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware')

router.post("/send", sendContact)
router.delete("/delete/:id", authMiddleware, roleCheckMiddleware, createCategory)
router.get("/all", authMiddleware, roleCheckMiddleware, getCategories)

module.exports = router