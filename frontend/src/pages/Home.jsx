import React from 'react';
import Header from '../components/Header';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <main className="home-content">
                <h1 className="home-title">Welcome to the Book Library</h1>
                <p className="home-description">
                    Explore a world of knowledge with our extensive collection of books. From fiction to non-fiction, we have it all.
                </p>
                <div className="home-sections">
                    <div className="section">
                        <h2 className="section-title">New Arrivals</h2>
                        <p>Check out the latest additions to our collection.</p>
                    </div>
                    <div className="section">
                        <h2 className="section-title">Popular Genres</h2>
                        <p>Discover books in genres like Mystery, Romance, Science Fiction, and more.</p>
                    </div>
                    <div className="section">
                        <h2 className="section-title">Staff Picks</h2>
                        <p>Our staff's top recommendations just for you.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
