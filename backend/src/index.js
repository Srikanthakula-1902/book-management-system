require('dotenv').config()
const express = require("express");
const cors = require("cors")
const { addBook, getAllBooks, searchBooksByTitle, deleteBook, updateBook } = require('./models/books.model');
const app = express();
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    return res.json({message:"server is healthy"})
})

app.post("/books",async (req,res)=>{
    const {title,author,genre,pages,publishedDate} = req.body;
    try{
        const newBook = await addBook(title,author,genre,pages,publishedDate);
        return res.status(201).json({success:true,message:"book created",book:newBook})
    }catch(error){
        return res.status(500).json({message:"something went on server",success:false})
    } 
})
app.put("/books/:bookId",async (req,res)=>{
    const {title,author,genre,pages,publishedDate} = req.body;
    const bookId = parseInt(req.params.bookId);
    try{
        const newBook = await updateBook(bookId,{title,author,genre,pages:parseInt(pages),publishedDate});
        return res.status(200).json({success:true,message:"book updated",book:newBook})
    }catch(error){
        return res.status(500).json({message:"something went on server",success:false,error:error.message,errorInfo:error})
    } 
})
app.get("/books",async (req,res)=>{
    const {query} = req.query;
    console.log(query);
    try{
        let books = ""
        if(query==""){
            console.log("getAll");
            books = await getAllBooks();
        } else{
            console.log("getMatched");
            books = await searchBooksByTitle(query)
        }
        return res.status(201).json({success:true,message:"books fetched",books:books})
    }catch(error){
        return res.status(500).json({message:"something went on server",success:false})
    } 
})
app.delete("/books/:bookId",async (req,res)=>{
    const bookId = parseInt(req.params.bookId);
    try{
        await deleteBook(bookId);
        return res.json({message:"book deleted successfully", success:true})
    }catch(error){
        return res.status(500).json({message:"something went on server",success:false})
    }
})
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));