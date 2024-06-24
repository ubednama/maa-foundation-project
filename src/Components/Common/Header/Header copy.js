import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <NavLink className="text-3xl font-bold leading-none" href="#">
          <img alt="maa-logo" className="h-10 ml-10 mt-3" src="/assets/maa-logo.png" />
        </NavLink>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ">
          <li>
            <NavLink
              className="text-xl hover:text-[#EC1D1E] font-semibold hover:underline "
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className="text-xl hover:text-[#EC1D1E] font-semibold hover:underline"
             to="/event">
              Event
            </NavLink>
          </li>

          <li>
            <NavLink
              className="text-xl hover:text-[#EC1D1E] font-semibold hover:underline"
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              className="text-xl hover:text-[#EC1D1E] font-semibold hover:underline"
              to="/blog"
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              className="text-xl hover:text-[#EC1D1E] font-semibold hover:underline"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 hover:bg-[#EC1D1E] hover:text-white text-sm font-bold rounded-xl"
          to="/signup"
        >
          Sign Up
        </NavLink>
        <NavLink
          className="lg:inline-block py-2 px-6 hover:bg-[#EC1D1E]  hover:text-white text-sm font-bold rounded-xl"
          to="/login"
        >
          Log In
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
