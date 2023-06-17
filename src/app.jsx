import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/app.css";
import LoginPage from "./containers/login/login.page";
import HomePage from "./containers/home/home.page";
import ScrollToTop from "./components/core/scroll-to-top";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
};

export default App;
