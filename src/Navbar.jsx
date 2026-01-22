import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    const closeNavbar = () => {
        setIsOpen(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/" onClick={closeNavbar}>
                    🚀 ديجيتال ستور
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-expanded={isOpen}
                    style={{ borderColor: 'var(--border)' }}
                >
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav me-auto ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeNavbar}>الرئيسية</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" onClick={closeNavbar}>الخدمات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeNavbar}>من نحن</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeNavbar}>اتصل بنا</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" onClick={closeNavbar}>إنشاء حساب</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
