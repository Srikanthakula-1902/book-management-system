import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useSearchParams } from 'react-router-dom';
import BookCard from '../components/BookCard';

const SearchDetails = () => {
    const [searchParams,_] = useSearchParams();
    const [searchQuery,setSearchQuery] = useState(searchParams.get("query"));
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        setSearchQuery(searchParams.get("query"))
        const getBooksByQuery = async ()=>{
            const response = await fetch(`http://localhost:3000/books?query=${searchParams.get("query")}`,{
                method:"GET",
              })
            const books = await response.json();
            console.log(books);
            setBooks(books.books)
        }
        getBooksByQuery()
    },[searchParams.get("query")]);
    return (
        <div>
            <Header/>
            {
               books.length ?  books.map(book=><BookCard key={book.BookID} book={book} setBooks={setBooks}/>) : <div
               style={{
                 textAlign: "center",
                 color: "#555",
                 fontSize: "18px",
                 fontWeight: "bold",
                 marginTop: "20px",
                 padding: "10px",
                 border: "1px solid #ccc",
                 borderRadius: "8px",
                 backgroundColor: "#f9f9f9",
               }}
             >
               No Books Found
             </div>
             
            }
        </div>
    );
}

export default SearchDetails;
