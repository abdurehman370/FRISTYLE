import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3>FRISTYLE BUILDING & CONSTRUCTION MATERIALS TRADING L.L.C</h3>
                    <p className="address">
                        <MapPin size={16} className="icon" /> Dubai,UAE
                    </p>
                    <p className="contact">
                        <Phone size={16} className="icon" /> <a href="tel:+971505878157" style={{ color: 'inherit' }}>+971 50 587 8157</a>
                    </p>
                    <p className="email">
                        <Mail size={16} className="icon" /> sales@rgsgulf.com
                        <br />
                        <span className="indent">sales1@rgsgulf.com</span>
                    </p>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/brands">Brands</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} FRISTYLE BUILDING & CONSTRUCTION MATERIALS TRADING L.L.C. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
