import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Product from "./components/pages/products/Product";
import ProductDetails from "./components/pages/products/ProductDetails";
import Nav from "./components/pages/products/Nav";
import User from "./components/pages/user/User";
import ContactUs from "./components/pages/contact/ContactUs";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const GoblaData = createContext();

function App() {
  const [linkStatus, setLinkStatus] = useState({
    home: false,
    product: false,
    user: false,
    contact: false,
  });

  const linkClicked = (linkId) => {
    setLinkStatus(() => {
      switch (linkId) {
        case "home":
          return { home: true, product: false, user: false, contact: false };
        case "product":
          return { home: false, product: true, user: false, contact: false };
        case "user":
          return { home: false, product: false, user: true, contact: false };
        case "contact":
          return { home: false, product: false, user: false, contact: true };
        default:
          break;
      }
    });
  };
  return (
    <GoblaData.Provider value={{ linkClicked, linkStatus, setLinkStatus }}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/pd" element={<ProductDetails />} />
          <Route path="/product/nav" element={<Nav />} />
          <Route path="/user" element={<User />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </GoblaData.Provider>
  );
}

export default App;
