import React from 'react';
import { Shield, Target, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Header Banner */}
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </div>
                    <h1>About FRISTYLE</h1>
                    <p className="product-cat">Building &amp; Construction Materials Trading L.L.C</p>
                </div>
            </div>

            {/* Main Content */}
            <section className="section">
                <div className="container about-content">
                    <div className="about-text">
                        <span className="section-badge">Our Company Profile</span>
                        <h2>Leading Construction Materials Supplier in the UAE</h2>
                        <p>
                            FRISTYLE BUILDING &amp; CONSTRUCTION MATERIALS TRADING L.L.C is a premier regional supplier of high-grade construction, plumbing, drainage, and engineering supplies based in Dubai, United Arab Emirates.
                        </p>
                        <p>
                            Established to fulfill the demanding supply requirements of modern commercial, residential, and infrastructure developments, we take pride in our robust supply network, exceptional product authenticity, and fast turnaround times.
                        </p>

                        <div className="about-values-list">
                            <div className="value-item">
                                <CheckCircle2 size={20} className="icon" />
                                <div>
                                    <strong>30+ Partner Brands</strong>
                                    <p>Official stockist for top global manufacturers including Pegler, Vado, Cosmoplast, and Franke.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <CheckCircle2 size={20} className="icon" />
                                <div>
                                    <strong>Comprehensive Supply</strong>
                                    <p>From industrial valves to compression fittings and sanitary solutions.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <CheckCircle2 size={20} className="icon" />
                                <div>
                                    <strong>UAE-Wide Logistics</strong>
                                    <p>Prompt delivery services to construction sites across Dubai, Abu Dhabi, and Northern Emirates.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="FRISTYLE Construction Site"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="section bg-subtle">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-card">
                            <div className="about-card-icon"><Target size={28} /></div>
                            <h3>Our Mission</h3>
                            <p>
                                To empower regional construction and MEP projects with superior-quality building materials, fair pricing, and dependable customer service that ensures uninterrupted project progress.
                            </p>
                        </div>
                        <div className="about-card">
                            <div className="about-card-icon"><Award size={28} /></div>
                            <h3>Our Vision</h3>
                            <p>
                                To become the most trusted single-source trading partner for building and MEP materials in the GCC, recognized for quality assurance and industry excellence.
                            </p>
                        </div>
                        <div className="about-card">
                            <div className="about-card-icon"><Shield size={28} /></div>
                            <h3>Quality Assurance</h3>
                            <p>
                                Every item in our portfolio undergoes rigorous verification to confirm compliance with international engineering standards and local municipal guidelines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">Partner With FRISTYLE Today</h2>
                    <p className="section-desc">
                        Need bulk material supplies or custom quotation for your upcoming project?
                    </p>
                    <a href="https://wa.me/971505878157" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Get In Touch <ArrowRight size={18} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
