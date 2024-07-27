import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import QRCodePage from './pages/QRCodePage';
import DashboardPage from './pages/Dashboard';
import RegistrationPage from './pages/RegistrationPage';
import ActionPage from './pages/actionPage';

const App = () => {
  return (
    <Router basename="/doubleparker">
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/generate-qr" element={<QRCodePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/action" element={<ActionPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
