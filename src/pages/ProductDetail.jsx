import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, Phone, ShieldCheck, Truck, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { productsData } from './Products';
import './Products.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = productsData.find(p => String(p.id) === id);

    // Scroll to top on mount or product change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="products-page">
                <div className="container section" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
                    <h2>Product Not Found</h2>
                    <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
                        The requested item could not be located.
                    </p>
                    <Link to="/products" className="btn btn-primary">
                        <ArrowLeft size={18} /> Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    // Related products in the same category
    const relatedProducts = productsData
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const whatsappMessage = encodeURIComponent(
        `Hello FRISTYLE Team, I am interested in getting a price quote for:\n\nProduct: ${product.name}\nCode: ${product.code}\nCategory: ${product.category}`
    );

    return (
        <div className="products-page">
            {/* Header Banner */}
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <Link to={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</Link>
                        <span>/</span>
                        <span>{product.name}</span>
                    </div>
                    <h1>{product.name}</h1>
                    <p className="product-cat">Product Code: {product.code}</p>
                </div>
            </div>

            {/* Main PDP Layout */}
            <div className="container section">
                <div className="product-detail">
                    {/* Left: Product Image Box */}
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    {/* Right: Product Info & CTAs */}
                    <div className="product-detail-info">
                        <div className="pdp-badge">{product.category}</div>
                        <h2>{product.name}</h2>
                        
                        <div className="pdp-code">
                            <span>Item Code:</span>
                            <strong>{product.code}</strong>
                        </div>

                        <hr className="pdp-divider" />

                        <p className="pdp-desc">
                            High-durability, industrial-grade building &amp; plumbing material engineered for reliability in regional construction projects across the UAE. Sourced directly from premier certified manufacturers.
                        </p>

                        {/* CTA Buttons */}
                        <div className="pdp-actions">
                            <a
                                href={`https://wa.me/971505878157?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdp-cta-whatsapp"
                            >
                                <MessageCircle size={20} />
                                Request Quote via WhatsApp
                            </a>
                            <a href="tel:+971505878157" className="pdp-cta-call">
                                <Phone size={18} />
                                Call Sales Team (+971 50 587 8157)
                            </a>
                        </div>

                        <hr className="pdp-divider" />

                        {/* Trust Badges */}
                        <div className="pdp-trust">
                            <div className="pdp-trust-badge">
                                <ShieldCheck size={16} /> 100% Genuine
                            </div>
                            <div className="pdp-trust-badge">
                                <Truck size={16} /> Fast UAE Delivery
                            </div>
                            <div className="pdp-trust-badge">
                                <Award size={16} /> Certified Quality
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="related-section">
                        <h3>Related Products in {product.category}</h3>
                        <div className="products-grid">
                            {relatedProducts.map(rel => (
                                <Link key={rel.id} to={`/products/${rel.id}`} className="product-card">
                                    <div className="product-image">
                                        <img src={rel.image} alt={rel.name} />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-cat">{rel.category}</span>
                                        <h4>{rel.name}</h4>
                                        <p className="product-code">Code: {rel.code}</p>
                                        <button className="btn-view">View Item</button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
