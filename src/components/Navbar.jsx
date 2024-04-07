import React from "react";
import logo from "../assets/images/logo-1.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "bg-black text-white p-2 rounded" : "text-white text-lg";

  return (
    <nav className="fixed flex items-center w-screen p-5 pr-12 pl-10 top-0 z-40 bg-gray-700">
      <div className="flex-1">
        <Link to="/">
          <img
            src={logo}
            className="h-12 w-auto motion-safe:animate-pulse duration-100 cursor-pointer hover:animate-none"
            alt=""
          />
        </Link>
      </div>
      <div>
        <ul className="flex gap-12 items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            Profiles
          </NavLink>
          <NavLink to="/add-profile" className={linkClass}>
            Add
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
