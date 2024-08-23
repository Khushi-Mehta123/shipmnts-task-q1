

const author = require('../schema/author')

const getauthor = (req,res)=>{
  res.status(200).json("hello")
}

const uploadauthor = async (req, res) => {
  try {
    const authors = req.body.author;
    await author.insertMany(authors);
    res.status(201).json({ message:` new author(s) added successfully.` });
} catch (error) {
    console.log(error);

    res.status(500).json({ message: 'An error occurred while adding authors.', error });
}

};
module.exports = {getauthor,uploadauthor}
