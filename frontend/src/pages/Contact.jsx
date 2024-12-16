import React from 'react';
import Header from '../components/Header';
import './contact.css';

const Contact = () => {
    return (
        <><Header />
        <div className="contact-container">
            <main className="contact-content">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-description">
                    We'd love to hear from you! Whether you have a question about our library, need assistance, or just want to share feedback, feel free to reach out.
                </p>
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your Message"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </main>
        </div></>
    );
};

export default Contact;
