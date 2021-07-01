import React from 'react';
import '../App.css';
import './HeroSection.css';
import video from "./videos/video-1.mp4";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>API-Based Projects</h1>
      <p>APIs used: CoinGecko | IBM | Unsplash</p>
   
    </div>
  );
}

export default HeroSection;
