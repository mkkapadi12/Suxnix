import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Shop from "./pages/Shop";
import ShopDetails from "./pages/ShopDetails";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth pages */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />

        {/* Pages */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog/news" element={<Blog />} />
        <Route exact path="/blog/news/:title" element={<BlogDetails />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="/shop/product/:id" element={<ShopDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
