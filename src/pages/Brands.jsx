import React from 'react';
import { Link } from 'react-router-dom';
import './Brands.css';

const Brands = () => {
    return (
        <div className="brands-page">
            <div className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Brands</span>
                    </div>
                    <h1>Our Authorized Brands</h1>
                    <p className="product-cat">35+ Certified Global Manufacturers &amp; Partners</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="section-badge">Official Partners</span>
                        <h2 className="section-title">Trusted Worldwide Engineering Brands</h2>
                        <p className="section-desc">
                            We source directly from world-class manufacturing leaders in plumbing, drainage, valves, mixing taps, and pipe support systems.
                        </p>
                    </div>

                    <div className="brands-grid">
                        {brands.map((brand, index) => (
                            <div key={index} className="brand-card" title={brand.name}>
                                <img src={brand.logo} alt={brand.name} className="brand-logo" loading="lazy" />
                                <span className="brand-name-tooltip">{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const brands = [
    { name: "Aquadrain", logo: "/images/brands/aquadrain.svg" },
    { name: "MPI Atlas", logo: "/images/brands/mpi-atlas.svg" },
    { name: "Bailey Products", logo: "/images/brands/bailey-products.jpg" },
    { name: "Blanco Germany", logo: "/images/brands/blanco-germany.svg" },
    { name: "Candan", logo: "/images/brands/candan.jpg" },
    { name: "Cepex", logo: "/images/brands/cepex.png" },
    { name: "Clever", logo: "/images/brands/clever.jpg" },
    { name: "Comap", logo: "/images/brands/comap.png" },
    { name: "Cosmoplast", logo: "/images/brands/cosmoplast.png" },
    { name: "Espa", logo: "/images/brands/espa.png" },
    { name: "Fillimori", logo: "/images/brands/fillimori.gif" },
    { name: "Filnox", logo: "/images/brands/filnox.jpg" },
    { name: "Flowflex", logo: "/images/brands/flowflex.png" },
    { name: "Franke", logo: "/images/brands/franke.png" },
    { name: "G-Style", logo: "/images/brands/g-style.jpg" },
    { name: "Globe", logo: "/images/brands/globe.jpg" },
    { name: "Haro", logo: "/images/brands/haro.gif" },
    { name: "Hepworth", logo: "/images/brands/hepworth.png" },
    { name: "McAlpine", logo: "/images/brands/mcalpine.png" },
    { name: "Multikwik", logo: "/images/brands/multikwik.svg" },
    { name: "Nirali", logo: "/images/brands/nirali.jpg" },
    { name: "Parabond", logo: "/images/brands/parabond.svg" },
    { name: "Pegler Yorkshire", logo: "/images/brands/pegler-yorkshire.svg" },
    { name: "PEX", logo: "/images/brands/pex.png" },
    { name: "Plumber", logo: "/images/brands/plumber.png" },
    { name: "PPP", logo: "/images/brands/ppp.png" },
    { name: "Strong Fix", logo: "/images/brands/strong-fix.jpg" },
    { name: "Strong Seal", logo: "/images/brands/strong-seal.jpg" },
    { name: "Strong Weld", logo: "/images/brands/strong-weld.jpg" },
    { name: "Strongweld", logo: "/images/brands/strongweld.png" },
    { name: "Tangit", logo: "/images/brands/tangit.png" },
    { name: "Tembo Seven Star", logo: "/images/brands/tembo-seven-star.png" },
    { name: "Terrain", logo: "/images/brands/terrain.svg" },
    { name: "Vado", logo: "/images/brands/vado.png" },
    { name: "Wednesbury", logo: "/images/brands/wednesbury.png" }
];

export default Brands;
