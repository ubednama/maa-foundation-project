import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    location.pathname === path ? "text-red-600":"text-black-500";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      <NavLink className={`text-3xl font-bold leading-none`} to="#">
        <img
          alt="maa-logo"
          className="h-10 ml-10 mt-3"
          src="/assets/maa-logo.png"
        />
      </NavLink>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
          isOpen ? "block" : "hidden"
        } absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0`}
      >
        <li>
          <NavLink
            className={`block lg:inline-block text-xl hover:text-[#EC1D1E] font-semibold hover:underline py-2 lg:py-0 ${linkStyle(
              "/"
            )}`}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`block lg:inline-block text-xl hover:text-[#EC1D1E] font-semibold hover:underline py-2 lg:py-0 ${linkStyle(
              "/event"
            )}`}
            to="/event"
          >
            Event
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`block lg:inline-block text-xl hover:text-[#EC1D1E] font-semibold hover:underline py-2 lg:py-0 ${linkStyle(
              "/gallery"
            )}`}
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`block lg:inline-block text-xl hover:text-[#EC1D1E] font-semibold hover:underline py-2 lg:py-0 ${linkStyle(
              "/blog"
            )}`}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`block lg:inline-block text-xl hover:text-[#EC1D1E] font-semibold hover:underline py-2 lg:py-0 ${linkStyle(
              "/about"
            )}`}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="mt-4 lg:mt-0 lg:ml-auto">
          <NavLink
            className={`block lg:inline-block py-2 px-6 border border-[#EC1D1E] hover:bg-[#EC1D1E] hover:text-white  text-sm font-bold rounded-xl ${linkStyle(
              "/signup"
            )}`}
            to="/signup"
          >
            Sign Up
          </NavLink>
        </li>
        <li className="mt-4 lg:mt-0">
          <NavLink
            className={`block lg:inline-block py-2 px-6 border border-[#EC1D1E] hover:bg-[#EC1D1E] hover:text-white  text-sm font-bold rounded-xl ${linkStyle(
              "/login"
            )}`}
            to="/login"
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
