import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* عن الشركة */}
                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h5>🚀 ديجيتال ستور</h5>
                        <p style={{ color: 'var(--text-muted)' }}>
                            نحن نقدم أفضل الخدمات الرقمية لمساعدة أعمالك على النمو والازدهار في العالم الرقمي.
                        </p>
                        <div className="footer-social">
                            <a href="#">📘</a>
                            <a href="#">🐦</a>
                            <a href="#">📷</a>
                            <a href="#">💼</a>
                        </div>
                    </div>

                    {/* روابط سريعة */}
                    <div className="col-lg-2 col-md-6 col-6 mb-4">
                        <h5>روابط سريعة</h5>
                        <ul className="footer-links">
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/products">الخدمات</Link></li>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/contact">اتصل بنا</Link></li>
                            <li><Link to="/signup">إنشاء حساب</Link></li>
                        </ul>
                    </div>

                    {/* الخدمات */}
                    <div className="col-lg-3 col-md-6 col-6 mb-4">
                        <h5>خدماتنا</h5>
                        <ul className="footer-links">
                            <li><a href="#">تصميم المواقع</a></li>
                            <li><a href="#">تطوير التطبيقات</a></li>
                            <li><a href="#">التسويق الرقمي</a></li>
                            <li><a href="#">تصميم الجرافيك</a></li>
                        </ul>
                    </div>

                    {/* تواصل معنا */}
                    <div className="col-lg-3 col-md-6 col-12 mb-4">
                        <h5>تواصل معنا</h5>
                        <ul className="footer-links">
                            <li>📍 اليمن - مأرب</li>
                            <li>📧 asemkhabash@gmail.com</li>
                            <li>📱 +967 780 002 776</li>
                        </ul>
                    </div>
                </div>

                {/* حقوق النشر */}
                <div className="footer-bottom">
                    <p>© 2026 ديجيتال ستور. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer