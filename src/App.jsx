import React from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Library from './components/Library';
import Community from './components/Community';
import Footer from './components/Footer';
import SafeSex from './components/SafeSex';

function App() {
  return (
    <div className='main-container w-full max-w-screen-xl min-h-screen font-body bg-[#fff] relative over-flow-hidden mx-auto my-0'>
      <Navbar />
      <Hero />
      <Library />
      <Community />
      
      
      {/* Other components */}
    </div>
  );
}

export default App;
