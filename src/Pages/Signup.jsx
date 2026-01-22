import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");

    const [show, setShow] = useState(false)
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}
        if (!name) newErrors.name = "الاسم مطلوب"
        if (!email) newErrors.email = "البريد الإلكتروني مطلوب"
        if (!password) newErrors.password = "كلمة المرور مطلوبة"
        if (password !== confirmPassword) newErrors.confirmPassword = "كلمات المرور غير متطابقة"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (validateForm()) {
            setShow(true)
        }
    }

    const formStyles = {
        section: {
            paddingTop: '120px',
            paddingBottom: '80px',
            minHeight: '100vh',
        },
        formContainer: {
            background: 'var(--bg-light)',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            maxWidth: '600px',
            margin: '0 auto',
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center',
        },
        subtitle: {
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginBottom: '2rem',
        },
        formGroup: {
            marginBottom: '1.5rem',
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '500',
            color: 'var(--text-light)',
        },
        input: {
            width: '100%',
            background: 'var(--bg-dark)',
            border: '1px solid var(--border)',
            color: 'var(--text-light)',
            padding: '1rem',
            borderRadius: '10px',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        },
        select: {
            width: '100%',
            background: 'var(--bg-dark)',
            border: '1px solid var(--border)',
            color: 'var(--text-light)',
            padding: '1rem',
            borderRadius: '10px',
            fontSize: '1rem',
            cursor: 'pointer',
        },
        button: {
            width: '100%',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            marginTop: '1rem',
        },
        error: {
            color: '#ef4444',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
        },
        successCard: {
            background: 'var(--bg-dark)',
            padding: '2rem',
            borderRadius: '15px',
            marginTop: '2rem',
            border: '1px solid var(--success)',
        },
        successTitle: {
            color: 'var(--success)',
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        },
        infoItem: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.75rem 0',
            borderBottom: '1px solid var(--border)',
        },
        infoLabel: {
            color: 'var(--text-muted)',
        },
        infoValue: {
            color: 'var(--text-light)',
            fontWeight: '500',
        },
        row: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
        },
    }

    return (
        <section style={formStyles.section}>
            <div className="container">
                <div style={formStyles.formContainer}>
                    <h1 style={formStyles.title}>إنشاء حساب جديد</h1>
                    <p style={formStyles.subtitle}>انضم إلينا واستمتع بخدماتنا الرقمية المميزة</p>

                    <form onSubmit={submitForm}>
                        <div style={formStyles.formGroup}>
                            <label style={formStyles.label} htmlFor="name">الاسم الكامل</label>
                            <input
                                type="text"
                                id="name"
                                style={formStyles.input}
                                placeholder="أدخل اسمك الكامل"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span style={formStyles.error}>{errors.name}</span>}
                        </div>

                        <div style={formStyles.formGroup}>
                            <label style={formStyles.label} htmlFor="email">البريد الإلكتروني</label>
                            <input
                                type="email"
                                id="email"
                                style={formStyles.input}
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span style={formStyles.error}>{errors.email}</span>}
                        </div>

                        <div style={formStyles.row}>
                            <div style={formStyles.formGroup}>
                                <label style={formStyles.label} htmlFor="password">كلمة المرور</label>
                                <input
                                    type="password"
                                    id="password"
                                    style={formStyles.input}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <span style={formStyles.error}>{errors.password}</span>}
                            </div>
                            <div style={formStyles.formGroup}>
                                <label style={formStyles.label} htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    style={formStyles.input}
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {errors.confirmPassword && <span style={formStyles.error}>{errors.confirmPassword}</span>}
                            </div>
                        </div>

                        <div style={formStyles.row}>
                            <div style={formStyles.formGroup}>
                                <label style={formStyles.label} htmlFor="phone">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    style={formStyles.input}
                                    placeholder="+967 XXX XXX XXX"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div style={formStyles.formGroup}>
                                <label style={formStyles.label} htmlFor="country">الدولة</label>
                                <select
                                    id="country"
                                    style={formStyles.select}
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value="">اختر الدولة...</option>
                                    <option value="اليمن">اليمن</option>
                                    <option value="السعودية">السعودية</option>
                                    <option value="الإمارات">الإمارات</option>
                                    <option value="مصر">مصر</option>
                                    <option value="الأردن">الأردن</option>
                                    <option value="الكويت">الكويت</option>
                                    <option value="قطر">قطر</option>
                                    <option value="البحرين">البحرين</option>
                                    <option value="عمان">عمان</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            style={formStyles.button}
                            onMouseOver={(e) => e.target.style.opacity = '0.9'}
                            onMouseOut={(e) => e.target.style.opacity = '1'}
                        >
                            🚀 إنشاء الحساب
                        </button>
                    </form>

                    {show && (
                        <div style={formStyles.successCard}>
                            <div style={formStyles.successTitle}>
                                ✅ تم التسجيل بنجاح!
                            </div>
                            <div style={formStyles.infoItem}>
                                <span style={formStyles.infoLabel}>الاسم</span>
                                <span style={formStyles.infoValue}>{name}</span>
                            </div>
                            <div style={formStyles.infoItem}>
                                <span style={formStyles.infoLabel}>البريد الإلكتروني</span>
                                <span style={formStyles.infoValue}>{email}</span>
                            </div>
                            <div style={formStyles.infoItem}>
                                <span style={formStyles.infoLabel}>رقم الهاتف</span>
                                <span style={formStyles.infoValue}>{phone || 'غير محدد'}</span>
                            </div>
                            <div style={{ ...formStyles.infoItem, borderBottom: 'none' }}>
                                <span style={formStyles.infoLabel}>الدولة</span>
                                <span style={formStyles.infoValue}>{country || 'غير محدد'}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Signup