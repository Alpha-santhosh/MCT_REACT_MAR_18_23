import React from 'react'
import Product from "./components/pages/products/Product";
import User from "./components/pages/user/User";
import ContactUs from "./components/pages/contact/ContactUs";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import ProductDetails from './components/pages/products/ProductDetails';

function Rout() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/user" element={<User />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
            </Routes>
        </div>
    )
}

export default Rout;