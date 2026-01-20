import React, { useState } from 'react'

const Contact = () => {
    // استخدام useState لإدارة حالة النموذج
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    // معالجة تغيير المدخلات
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // معالجة إرسال النموذج
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section className="contact-section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <div className="container">
                <div className="section-title">
                    <h2>تواصل معنا</h2>
                    <p>نحن هنا لمساعدتك</p>
                </div>

                <div className="row">
                    {/* نموذج الاتصال */}
                    <div className="col-lg-8 col-12 mb-4">
                        <div className="contact-form">
                            <h4 style={{ marginBottom: '2rem' }}>أرسل لنا رسالة</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="الاسم الكامل"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="البريد الإلكتروني"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="الموضوع"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="رسالتك..."
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <button type="submit" className="btn-submit">
                                    إرسال الرسالة
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* معلومات الاتصال */}
                    <div className="col-lg-4 col-12">
                        <div className="contact-info-card">
                            <h4>📍 العنوان</h4>
                            <p>اليمن - مأرب</p>
                        </div>
                        <div className="contact-info-card">
                            <h4>📧 البريد الإلكتروني</h4>
                            <p>asemkhabash@gmail.com</p>
                        </div>
                        <div className="contact-info-card">
                            <h4>📱 الهاتف</h4>
                            <p>+967 780 002 776</p>
                        </div>
                        <div className="contact-info-card">
                            <h4>⏰ ساعات العمل</h4>
                            <p>السبت - الخميس: 9 صباحاً - 6 مساءً</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
