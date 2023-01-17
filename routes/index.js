const express = require('express')
const router = express.Router()

const indexController = require('../controllers/indexController')

//home
router.get('/', indexController.index)

module.exports = router
