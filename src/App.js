import React from 'react';
import LoginPage from './pages/Login Page/login'
import Dashboard from './pages/DashBoard_Page/dashboard';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;