import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Shop from "./pages/Shop";

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
      </Routes>
    </Router>
  );
};

export default App;
