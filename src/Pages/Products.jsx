import React, { useState } from 'react'
import { services } from '../data'
import Product from '../Product'

const Products = () => {
    // استخدام useState لإدارة الفلترة
    const [filter, setFilter] = useState('الكل')

    // الفئات المتاحة
    const filterCategories = ['الكل', 'تطوير', 'تصميم', 'تسويق']

    // فلترة المنتجات حسب الفئة
    const filteredServices = filter === 'الكل'
        ? services
        : services.filter(service => service.category === filter)

    return (
        <section className="products-section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container">
                <div className="section-title">
                    <h2>جميع الخدمات</h2>
                    <p>تصفح جميع خدماتنا الرقمية</p>
                </div>

                {/* أزرار الفلترة */}
                <div className="filter-buttons">
                    {
                        filterCategories.map((cat, index) => (
                            <button
                                key={index}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))
                    }
                </div>

                {/* عرض المنتجات */}
                <div className="row">
                    {
                        filteredServices.map((service) => (
                            <Product product={service} key={service.id} />
                        ))
                    }
                </div>

                {/* رسالة عند عدم وجود منتجات */}
                {
                    filteredServices.length === 0 && (
                        <div className="text-center">
                            <h4>لا توجد خدمات في هذا القسم</h4>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Products
