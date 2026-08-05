import React, { useEffect, useMemo } from 'react';
import { ArrowRight, Shield, Truck, Headphones, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const categories = [
    { title: "Valves",                         image: "/images/products/angle-valve-76.jpg" },
    { title: "Compression Fittings",           image: "/images/products/CompressionCoupling.jpeg" },
    { title: "Pipes And Fittings",             image: "/images/products/Cosmoplastpipe.jpeg" },
    { title: "Plumbing And Drainage Solutions",image: "/images/products/Trap-Fitting.jpeg" },
    { title: "CP Sanitary Mixers",             image: "/images/products/vado-mixer-tap.jpeg" },
    { title: "Kitchen Sinks",                  image: "/images/products/blankosink.jpeg" },
];

const homeBrands = [
    { name: "Pegler Yorkshire", logo: "/images/brands/pegler-yorkshire.svg" },
    { name: "Cosmoplast",       logo: "/images/brands/cosmoplast.png" },
    { name: "PEX",              logo: "/images/brands/pex.png" },
    { name: "Vado",             logo: "/images/brands/vado.png" },
    { name: "MPI Atlas",        logo: "/images/brands/mpi-atlas.svg" },
    { name: "Franke",           logo: "/images/brands/franke.png" },
    { name: "Hepworth",         logo: "/images/brands/hepworth.png" },
    { name: "Terrain",          logo: "/images/brands/terrain.svg" },
];

const highlights = [
    { icon: <Shield size={24} />, title: "Premium Quality",   desc: "Genuine products sourced from the world's leading manufacturers." },
    { icon: <Truck size={24} />,  title: "Fast Delivery",     desc: "Efficient, reliable logistics across the UAE to keep your projects moving." },
    { icon: <Headphones size={24}/>, title: "Expert Support", desc: "Our technical team provides guidance and after-sales support." },
    { icon: <Star size={24} />,   title: "Trusted Brands",    desc: "Partnered with 30+ globally recognised construction material brands." },
];

const Home = () => {
    // Scroll reveal
    useEffect(() => {
        const els = document.querySelectorAll('.reveal');
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } }),
            { threshold: 0.12 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    // Duplicate brands for seamless marquee
    const marqueeItems = useMemo(() => [...homeBrands, ...homeBrands], []);

    return (
        <div className="home-page">

            {/* ── HERO ── */}
            <section className="hero">
                <div className="container hero-inner">
                    <div className="hero-left reveal">
                        <div className="hero-badge">
                            <Star size={12} /> Trusted Building Materials Supplier
                        </div>
                        <h1 className="hero-title">
                            Quality Materials for <span>Exceptional</span> Construction
                        </h1>
                        <p className="hero-desc">
                            Leading supplier of premium building & construction materials across the UAE.
                            Serving contractors, engineers and facility managers since day one.
                        </p>
                        <div className="hero-actions">
                            <Link to="/products" className="btn btn-primary">
                                Browse Products <ArrowRight size={18} />
                            </Link>
                            <Link to="/about" className="btn btn-outline-white">
                                About Us
                            </Link>
                        </div>
                    </div>

                    <div className="hero-right reveal">
                        {[
                            { number: "300+",  label: "Products Available" },
                            { number: "30+",   label: "Global Brands" },
                            { number: "UAE",   label: "Nationwide Delivery" },
                            { number: "24/7",  label: "Customer Support" },
                        ].map(s => (
                            <div key={s.label} className="hero-stat-card">
                                <div className="number">{s.number}</div>
                                <div className="label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT TEASER ── */}
            <section className="section reveal">
                <div className="container about-teaser">
                    <div className="about-teaser-text">
                        <span className="section-badge">Who We Are</span>
                        <h2 className="section-title">Your Trusted Partner in Building Materials</h2>
                        <p>
                            FRISTYLE BUILDING &amp; CONSTRUCTION MATERIALS TRADING L.L.C is a premier supplier
                            of high-quality construction and industrial materials in the UAE. Established with a
                            vision to support the growing infrastructure needs of the region, we deliver
                            reliability, quality, and exceptional service.
                        </p>
                        <blockquote>
                            "We don't just supply materials — we deliver solutions that build better projects."
                        </blockquote>
                        <Link to="/about" className="btn btn-primary">
                            Learn More <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="about-teaser-img">
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                            alt="Construction site"
                        />
                        <div className="about-teaser-img-badge">
                            <strong>UAE</strong>
                            <span>Serving Nationwide</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CATEGORIES ── */}
            <section className="section bg-subtle reveal">
                <div className="container">
                    <div className="text-center">
                        <span className="section-badge">What We Offer</span>
                        <h2 className="section-title">Our Product Categories</h2>
                        <p className="section-desc">
                            Explore our comprehensive range of building materials across multiple categories.
                        </p>
                    </div>
                    <div className="categories-grid">
                        {categories.map((cat) => (
                            <Link
                                key={cat.title}
                                to={`/products?category=${encodeURIComponent(cat.title)}`}
                                className="category-card"
                            >
                                <div className="cat-img-container">
                                    <img src={cat.image} alt={cat.title} className="cat-img" />
                                </div>
                                <div className="cat-overlay">
                                    <h3>{cat.title}</h3>
                                    <span className="cat-link">View Products <ArrowRight size={13} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="section highlights-section reveal">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="section-badge" style={{ background: 'rgba(234,88,12,.25)', color: '#ffa071' }}>
                            Why Choose Us
                        </span>
                        <h2 className="section-title" style={{ color: '#fff' }}>Built on Quality &amp; Trust</h2>
                    </div>
                    <div className="highlights-grid">
                        {highlights.map((h) => (
                            <div key={h.title} className="highlight-item">
                                <div className="highlight-icon">{h.icon}</div>
                                <h3>{h.title}</h3>
                                <p>{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BRANDS MARQUEE ── */}
            <section className="section bg-subtle reveal">
                <div className="container">
                    <div className="text-center">
                        <span className="section-badge">Trusted Partners</span>
                        <h2 className="section-title">Brands We Carry</h2>
                        <p className="section-desc">
                            We partner with 30+ globally recognised manufacturers to ensure you get only genuine, top-quality products.
                        </p>
                    </div>
                </div>
                <div className="brands-marquee-wrapper">
                    <div className="brands-marquee">
                        {marqueeItems.map((brand, i) => (
                            <div key={i} className="marquee-brand">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container text-center-mt">
                    <Link to="/brands" className="btn btn-outline">View All Brands <ArrowRight size={17} /></Link>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="section reveal">
                <div className="container">
                    <div className="cta-banner">
                        <div className="cta-banner-text">
                            <h2>Ready to Start Your Project?</h2>
                            <p>Talk to our team today — we'll help you find the right materials for any job.</p>
                        </div>
                        <div className="cta-banner-actions">
                            <a href="https://wa.me/971505878157" target="_blank" rel="noopener noreferrer"
                               className="btn btn-outline-white">
                                WhatsApp Us
                            </a>
                            <a href="tel:+971505878157" className="btn"
                               style={{ background: '#fff', color: 'var(--accent)', fontWeight: 700, borderRadius: 'var(--r-md)' }}>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
