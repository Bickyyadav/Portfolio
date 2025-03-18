import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Sidebar */}
      <div className={`${isOpen ? "col-span-2" : "col-span-1"} transition-all duration-300`}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main Content */}
      <div className={`overflow-y-auto h-screen ${isOpen ? "col-span-10" : "col-span-11"} transition-all duration-300`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
