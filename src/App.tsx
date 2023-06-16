import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "assets/styles/App.css";
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
