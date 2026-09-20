import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Pricing from './Pages/Pricing';
import Potraits from './Pages/Potraits';
import Editing from './Pages/Editing';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Poetry from './Pages/Poetry';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './Header';
import Home from './Home';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-wrapper">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/potraits' element={<div className='container pb-5 pt-3'><Potraits /></div>} />
        <Route path='/editing' element={<div className='container pb-5 pt-3'><Editing /></div>} />
        <Route path='/pricing' element={<div className='container pb-5 pt-3'><Pricing /></div>} />
        <Route path='/poetry' element={<div className='container pb-5 pt-3'><Poetry /></div>} />
        <Route path='/contact' element={<div className='container pb-5 pt-3'><Contact /></div>} />
        <Route path='/about' element={<div className='container pb-5 pt-3'><About /></div>} />
      </Routes>
    </div>
  );
}

export default App;























