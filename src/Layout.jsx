import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex mt-1">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-1 p-2 overflow-auto">
          {children} {/* Dynamic content (pages) */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
