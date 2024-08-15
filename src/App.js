	

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Discover from './components/Discover/Discover';
import AboutUs from './components/AboutUs/AboutUs';
import Review from './components/Review/Review';
import ContactUs from './components/ContactUs/ContactUs'



function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/review" element={<Review/>} />
        <Route path="/ContactUs" element={<ContactUs/>}/>


      </Routes>
    </Router>
  );
}

export default App;