
const books = require('../schema/books')

const getallbooks = (req,res)=>{
  res.status(200).json(books)
}

const uploadbooks = async (req,res)=>{

  try {
    const book = req.body.author;
    await books.insertMany(book);
    res.status(201).json({ message:` new books(s) added successfully.` });
} catch (error) {
    console.log(error);

    res.status(500).json({ message: 'An error occurred while adding books.', error });
}

}

module.exports = {getallbooks,uploadbooks}
