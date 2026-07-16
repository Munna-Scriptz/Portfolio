const resHandler = require("../utils/resHandler")

// ================= Create Category =====================
const sendContact = async (req, res) => {
    try {
        const { name, email, topic, message } = req.body

        // ---------- Validations 
        if (!slug) return resHandler.error(res, 400, "Category slug is required")
        if (!email) return resHandler.error(res, 400, "Category name is required")
        if (!topic) return resHandler.error(res, 400, "Category name is required")
        if (!message) return resHandler.error(res, 400, "Category name is required")

        // ----------- Send to DB 
        await categorySchema.create({
            name,
            email,
            topic,
            message
        })

        // --------------- Success
        resHandler.success(res, 201, "Message send successfully")
    } catch (error) {
        resHandler.error(res, 500, "Internal server error")
    }
}


module.exports = { sendContact }