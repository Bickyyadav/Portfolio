import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 h-screen  ">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar />
      </div>

      {/* Main Content with hidden scrollbar */}
      <div className="  overflow-y-auto   h-screen col-span-10 ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
