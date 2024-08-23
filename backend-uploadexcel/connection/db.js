
const mongoose = require('mongoose')

const connstr = 'mongodb+srv://khushi:1234@shipmnts-task-q1.c7w4g.mongodb.net/?retryWrites=true&w=majority&appName=shipmnts-task-q1'

const connectDB = mongoose.connect(connstr)

module.exports = connectDB
