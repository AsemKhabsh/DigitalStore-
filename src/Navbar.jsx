import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    🚀 ديجيتال ستور
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    style={{ borderColor: 'var(--border)' }}
                >
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">الرئيسية</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">الخدمات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">من نحن</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">اتصل بنا</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
