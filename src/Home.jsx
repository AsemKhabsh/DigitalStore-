import React from 'react'
import { categories, services } from './data'
import Product from './Product'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* قسم Hero */}
            <section className="hero-section">
                <div className="container">
                    <h1>خدمات رقمية احترافية</h1>
                    <p>نقدم أفضل الخدمات الرقمية لتطوير أعمالك ونمو مشروعك</p>
                    <Link to="/products" className="btn-hero">
                        استكشف خدماتنا
                    </Link>
                </div>
            </section>

            {/* قسم الفئات */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-title">
                        <h2>أقسام الخدمات</h2>
                        <p>اختر القسم المناسب لاحتياجاتك</p>
                    </div>
                    <div className="row justify-content-center">
                        {
                            categories.map((category, index) => (
                                <div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>
                                    <div className="category-card">
                                        <div className="icon">{category.icon}</div>
                                        <img src={category.img} alt={category.title} />
                                        <h4>{category.title}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* قسم المنتجات المميزة */}
            <section className="products-section">
                <div className="container">
                    <div className="section-title">
                        <h2>خدماتنا المميزة</h2>
                        <p>اكتشف أفضل خدماتنا الرقمية</p>
                    </div>
                    <div className="row">
                        {
                            services.slice(0, 6).map((service) => (
                                <Product product={service} key={service.id} />
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/products" className="btn-hero" style={{ background: 'var(--gradient)', color: 'white' }}>
                            عرض جميع الخدمات
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
