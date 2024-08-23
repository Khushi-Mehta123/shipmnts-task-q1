
const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const books = require('./routers/book')
const author = require('./routers/author')
const port=3000

const connectDB = require('./connection/db')

const path = require('path')

app.use(express.json())
app.use(cors({
    origin : 'http://localhost:4200',
}))

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', books)
app.use('/authors',author)


const start = async () => {
    try {
        await connectDB
        console.log("Connectd");
        app.listen(port, () => console.log(`Server Listenong on port ${port}!`))
    } catch (error) {
        console.log(error);
    }
}

start()
