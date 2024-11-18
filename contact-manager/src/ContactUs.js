import React from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <p>For any queries or support, please reach out to us at:</p>
            <p><strong>Email:</strong> <a href="mailto:dineshkumarv.22it@kongu.edu">dineshkumarv.22it@kongu.edu</a></p>
            <p><strong>Mobile:</strong> <a href="tel:88700099495">88700099495</a></p>
            <p><strong>Creator:</strong> Dineshkumar V</p>
            <p>We are here to help you manage your contacts efficiently!</p>
        </div>
    );
};

export default ContactUs;
