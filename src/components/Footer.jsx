import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                {/* Col 1: Brand Info */}
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <img src="/images/logo.svg" alt="FRISTYLE logo" className="footer-logo-mark" />
                        <div className="logo-text">
                            <h2>FRISTYLE</h2>
                            <span className="subtitle">Building &amp; Construction Materials</span>
                        </div>
                    </Link>
                    <p className="footer-about">
                        FRISTYLE BUILDING &amp; CONSTRUCTION MATERIALS TRADING L.L.C is your trusted partner for high-grade MEP, plumbing, drainage, valves and construction supplies in the UAE.
                    </p>

                    <div className="contact-details">
                        <p className="address">
                            <MapPin size={16} className="icon" /> Dubai, UAE
                        </p>
                        <p className="contact">
                            <Phone size={16} className="icon" /> <a href="tel:+971505878157">+971 50 587 8157</a>
                        </p>
                        <p className="email">
                            <Mail size={16} className="icon" /> fristyle2023@gmail.com
                        </p>
                    </div>
                </div>

                {/* Col 2: Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products Catalog</Link></li>
                        <li><Link to="/brands">Authorized Brands</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                    </ul>
                </div>

                {/* Col 3: Popular Categories */}
                <div className="footer-col">
                    <h3>Categories</h3>
                    <ul className="footer-links">
                        <li><Link to="/products?category=Valves">Angle &amp; Gate Valves</Link></li>
                        <li><Link to="/products?category=Compression%20Fittings">Compression Fittings</Link></li>
                        <li><Link to="/products?category=Pipes%20And%20Fittings">Pipes &amp; Fittings</Link></li>
                        <li><Link to="/products?category=Plumbing%20And%20Drainage%20Solutions">Drainage Solutions</Link></li>
                        <li><Link to="/products?category=CP%20Sanitary%20Mixers">CP Sanitary Mixers</Link></li>
                    </ul>
                </div>

                {/* Col 4: Support & CTA */}
                <div className="footer-col cta-col">
                    <h3>Get In Touch</h3>
                    <p className="footer-about" style={{ marginBottom: '1.25rem' }}>
                        Need immediate bulk pricing or engineering specs? Connect with our sales engineers via WhatsApp.
                    </p>
                    <a
                        href="https://wa.me/971505878157"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ width: '100%', marginBottom: '1.5rem', justifyContent: 'center' }}
                    >
                        <MessageCircle size={18} /> WhatsApp Inquiry
                    </a>

                    <div className="social-icons">
                        <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
                        <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>&copy; {new Date().getFullYear()} FRISTYLE BUILDING &amp; CONSTRUCTION MATERIALS TRADING L.L.C. All rights reserved.</p>
                    <p className="footer-tagline">Quality Building Materials • Dubai, UAE</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
