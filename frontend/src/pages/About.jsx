import React from 'react';
import Header from '../components/Header';
import './about.css';

const About = () => {
    return (
        <><Header />
        <div className="about-container">
            
            <main className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to our library, a place where knowledge meets imagination. We are dedicated to providing a vast collection of books, fostering a love for reading, and creating a community for book enthusiasts.
                </p>
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        To inspire and empower individuals through the power of books, fostering creativity, critical thinking, and lifelong learning.
                    </p>
                </section>
                <section className="about-section">
                    <h2>Our Vision</h2>
                    <p>
                        To be a beacon of knowledge, offering an inclusive space where everyone can explore, learn, and grow.
                    </p>
                </section>
            </main>
        </div></>
    );
};

export default About;
