import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPages from "./pages/MainPages.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Product from "./layout/Products.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPages />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Ye important hai */}
      <Route path="/products" element={<Product />} />
    </Routes>
  );
};

export default App;
