import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    
      <Routes>
        {/* Default to Login page */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes - Shown only after login */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    
  );
}

export default App;