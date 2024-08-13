
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import Discover from './components/Discover/Discover';
// import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<AboutUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;