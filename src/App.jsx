import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Headphones from "./pages/Headphones/Headphones.jsx";
import Speakers from "./pages/Speakers/Speakers.jsx";
import Earphones from "./pages/Earphones/Earphones.jsx";
// import Earphones from "./pages/Cart/Cart.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/headphones" element={<Headphones />} />
        <Route path="/category/speakers" element={<Speakers />} />
        <Route path="/category/earphones" element={<Earphones />} />
        {/* <Route path="/category/cart" element={<Cart />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
