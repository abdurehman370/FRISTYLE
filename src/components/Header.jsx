import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Search, Heart, ShoppingCart, ChevronDown, MessageCircle } from 'lucide-react';
import './Header.css';
import { categories } from '../pages/Products';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsMenuOpen(false); }, [location]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <a href="tel:+971505878157" className="contact-item">
                            <Phone size={13} /> +971 50 587 8157
                        </a>
                        <a href="mailto:fristyle2023@gmail.com" className="contact-item">
                            <Mail size={13} /> fristyle2023@gmail.com
                        </a>
                        <span className="contact-item mobile-hidden address-info">
                            <MapPin size={13} /> Dubai, UAE
                        </span>
                    </div>
                    <a href="https://wa.me/971505878157" className="top-bar-cta" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={13} />
                        <span>Get a Quote</span>
                    </a>
                </div>
            </div>

            {/* Main Nav */}
            <div className="main-header">
                <div className="container header-inner">
                    <div className="logo-wrapper">
                        <Link to="/" className="logo">
                            <img src="/images/logo.svg" alt="FRISTYLE logo" className="logo-mark" />
                            <div className="logo-text">
                                <h1>FRISTYLE</h1>
                                <span className="subtitle">Building &amp; Construction Materials</span>
                            </div>
                        </Link>
                    </div>

                    <nav className="desktop-nav">
                        <ul className="nav-list">
                            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                            <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>

                            <li className="nav-item-dropdown">
                                <Link to="/products" className={`nav-link ${location.pathname.startsWith('/products') ? 'active' : ''}`}>
                                    Products <ChevronDown size={14} />
                                </Link>
                                <div className="mega-menu">
                                    <div className="mega-content">
                                        <div className="mega-column">
                                            <h3>Product Categories</h3>
                                            <ul className="mega-links">
                                                {categories.filter(c => c !== 'All').map(cat => (
                                                    <li key={cat}>
                                                        <Link to={`/products?category=${encodeURIComponent(cat)}`}>{cat}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mega-featured">
                                            <div className="featured-card">
                                                <h4>Premium Valves</h4>
                                                <p>Explore our complete range of industrial-grade valves &amp; fittings.</p>
                                                <Link to="/products?category=Valves" className="btn btn-primary" style={{ marginTop: '.75rem', fontSize: '.82rem', padding: '.5rem 1rem' }}>
                                                    View Collection
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li><Link to="/brands" className={`nav-link ${location.pathname === '/brands' ? 'active' : ''}`}>Brands</Link></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link to="/products" className="icon-btn search-btn" aria-label="Search"><Search size={21} /></Link>
                        <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
                            <Heart size={21} /><span className="badge">0</span>
                        </Link>
                        <Link to="/cart" className="icon-btn" aria-label="Cart">
                            <ShoppingCart size={21} /><span className="badge">0</span>
                        </Link>
                        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-top">
                    <Link to="/" className="logo">
                        <img src="/images/logo.svg" alt="FRISTYLE" className="logo-mark" />
                        <div className="logo-text"><h1>FRISTYLE</h1></div>
                    </Link>
                    <button className="mobile-close" onClick={() => setIsMenuOpen(false)} aria-label="Close"><X size={22} /></button>
                </div>
                <nav className="mobile-nav">
                    <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/about" className={`mobile-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
                    <div className="mobile-submenu">
                        <Link to="/products" className={`mobile-link-header ${location.pathname.startsWith('/products') ? 'active' : ''}`}>Products</Link>
                        {categories.filter(c => c !== 'All').map(cat => (
                            <Link key={cat} to={`/products?category=${encodeURIComponent(cat)}`} className="mobile-sublink">{cat}</Link>
                        ))}
                    </div>
                    <Link to="/brands" className={`mobile-link ${location.pathname === '/brands' ? 'active' : ''}`}>Brands</Link>
                </nav>
                <div className="mobile-contact-strip">
                    <a href="tel:+971505878157" className="mobile-contact-item"><Phone size={16} /> +971 50 587 8157</a>
                    <a href="mailto:fristyle2023@gmail.com" className="mobile-contact-item"><Mail size={16} /> fristyle2023@gmail.com</a>
                    <a href="https://wa.me/971505878157" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '.5rem', justifyContent: 'center' }}>
                        <MessageCircle size={18} /> Chat on WhatsApp
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
