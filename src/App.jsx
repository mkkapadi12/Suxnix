import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth pages */}
        <Route exact path="/login" element={<Login />} />

        {/* Pages */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
