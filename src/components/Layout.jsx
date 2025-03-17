import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-8 h-screen  ">
      {/* Sidebar */}
      <div className="col-span-1">
        <Sidebar />
      </div>

      {/* Main Content with hidden scrollbar */}
      <div className=" overflow-y-auto   h-screen col-span-7 ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
