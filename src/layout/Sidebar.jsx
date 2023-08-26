import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/layout/layoutSlice";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleSidebar } from "../features/layout/layoutSlice";
// import {  useLocation } from "react-router-dom";
import MenuData from "./navbar-data/navMenuData";
import { Link, useLocation } from "react-router-dom";
// import { useEffect } from "react";

const Sidebar = () => {
  const layout = useSelector((state) => state.layout);
  const { isSidebarOpen } = layout || {};
  const dispatch = useDispatch();

  const location = useLocation();

  const currentPath = location?.pathname.slice(1) || location;

  const handleSidebar = () => {
    // handle through redux
    dispatch(toggleSidebar());
  };
  const menuData = MenuData().props.children || [];

  return (
    <React.Fragment>
      <button
        className=" absolute top-4 left-4 block md:hidden "
        onClick={handleSidebar}
      >
        <i className="ri-menu-2-fill ri-xl"></i>
      </button>
      <div
        className={`bg-blue-600  w-[250px] top-0 fixed  z-[1010] h-screen -left-full md:left-0 ${
          isSidebarOpen ? "left-0" : ""
        } 
        transition-all duration-300 ease-in-out  } `}
      >
        <img src="./images/logo.png" className="mt-12 w-4/6 mx-auto" alt="" />

        <ul className="mt-12">
          {menuData.map((item) => {
            return (
              <li
                className={`my-2 mx-6 py-2 flex items-center ${
                  currentPath === item.id ? "bg-blue-500 rounded-lg" : ""
                }`}
                key={item.id}
                onClick={() => {
                  item.click();
                }}
              >
                <Link
                  to={item.link}
                  className="flex items-center text-white hover:text-gray-200 px-6 "
                >
                  {item.icon && (
                    <img src={item.icon} alt="" className="w-4 h-4" />
                  )}
                  <span className="ml-4">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
