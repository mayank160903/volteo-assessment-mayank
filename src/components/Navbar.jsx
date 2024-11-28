// Navbar.jsx
import React from 'react';
import ship from "../assets/shipicon.png"
import power from "../assets/power.png"

const Navbar = () => {
  return (
    <header className="my-2 ml-2 mr-3 bg-white border rounded-xl border-gray-300 p-4 flex justify-between items-center">
        <div className="flex items-center">
            <img className='px-4' src={ship} alt="" />
            <div className='flex flex-col'>
            <h1 className="text-gray-800 text-lg font-semibold">Dev Vessel</h1>
            <p>16 Crewmates · <b className='font-medium text-gray-700'>09 Active</b></p>
            </div>
        </div>
      <div className="flex items-center space-x-4">
        <span className="text-md border rounded-2xl border-gray-400 px-4 py-2 text-gray-800">GMT +09:00</span>
        {/* Power Button Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <img src={power} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;


