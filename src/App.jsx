import React from "react"
import "./Style.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import { Routes, Route } from "react-router-dom"
import Products from "./Pages/Products"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
