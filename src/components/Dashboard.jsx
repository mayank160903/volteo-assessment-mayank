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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_5fr_4fr] gap-3">
  <FirstGrid />
  <SecondGrid />
  <div className="md:col-span-2 lg:col-span-1"><ThirdGrid /></div>
</div>

    </main>
  );
}

export default Dashboard;
