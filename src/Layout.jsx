import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
    // Layout to implement sidebar and navbar to all the children pages
  return (
    <div className="flex mt-1">
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        <Navbar />
        
        <main className="flex-1 p-2 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
