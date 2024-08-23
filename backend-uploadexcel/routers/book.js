
const express = require('express')
const router = express.Router()

const {getallbooks,uploadbooks} = require('../functions/books')

router.route('/').get(getallbooks).post(uploadbooks)


module.exports = router
