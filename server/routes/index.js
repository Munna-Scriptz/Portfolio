const express = require('express')
const router = express.Router()
const auth = require('./auth')
const product = require('./product')

// ------------ All routes 
router.use('/auth', auth)
router.use('/product', product)

router.get('/', (req, res)=>{
    res.send("Hello world")
})


// --------- Not Found 
router.use((req, res) => { res.status(404).send('404 Page Not Found') })

module.exports = router