// Dashboard.jsx
import React from 'react';
import hand from "../assets/hand.png"
import merchant from "../assets/merchant.png"
import ship from "../assets/ship.png"
import FirstGrid from './sections/FirstGrid';
import SecondGrid from './sections/SecondGrid';
import ThirdGrid from './sections/ThirdGrid';

const Dashboard = () => {
  return (
    <main className="flex-1 mr-1">
      <div className="grid grid-cols-3 gap-3">
        <FirstGrid />
    
        {/* Center Section (Daily Stream) */}
        <SecondGrid />

        {/* Right Section (My Day) */}
        <ThirdGrid />
      </div>
    </main>
  );
}

export default Dashboard;
