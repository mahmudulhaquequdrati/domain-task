// import React from 'react';

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/layout/layoutSlice";

const Layout = () => {
  const layout = useSelector((state) => state.layout);
  const { isSidebarOpen } = layout || {};
  const dispatch = useDispatch();
  const handleNavClose = () => {
    if (!isSidebarOpen) return;
    dispatch(toggleSidebar());
  };
  return (
    <div className="none md:flex font-poppins">
      <Sidebar />
      <div className=" md:ml-[250px] ml-0 grow ">
        <div
          onClick={handleNavClose}
          className={`px-12 lg:px-12 py-16 lg:py-16 xl:px-20 md:px-4 md:py-4 min-h-screen bg-[#FCFCFC] ${
            isSidebarOpen ? "fixed inset-0 bg-gray-900 opacity-25 z-50" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
