import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import './viewbook.css';

const ViewBook = () => {
    const location = useLocation();
    const book = JSON.parse(location.state.book);
    return (
        <>
            <Header />
            <div className="viewbook-container">
                <div className="viewbook-details">
                    <h1 className="viewbook-title">Book Details</h1>
                    <ul>
                        <li><span>Title:</span> {book.Title}</li>
                        <li><span>Author:</span> {book.AuthorName}</li>
                        <li><span>Genre:</span> {book.GenreName}</li>
                        <li><span>Pages:</span> {book.Pages}</li>
                        <li><span>Published Date:</span> {new Date(book.PublishedDate).toDateString()}</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ViewBook;
