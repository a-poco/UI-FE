import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Device from './Pages/Devices/Device';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/Device' element={<Device/>}/>
    <Route path='/' element={<App />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
