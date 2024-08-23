
const express = require('express')
const router = express.Router()

const {getauthor,uploadauthor} = require('../functions/author')

router.route('/').get(getauthor).post(uploadauthor)


module.exports = router
