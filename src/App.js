// src/App.js
import React from 'react';
import './App.css';
import Review from './components/Review/Review'; 
import ContactUs from './components/ContactUs/ContactUs';

const App = () => {
  return (
    <main>
      <Review/> {/* Render the Review component here */}
    </main>
  );
};

export default App;
