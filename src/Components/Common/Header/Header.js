import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    location.pathname === path ? "text-red-600":"text-black-500";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className="relative py-4 flex justify-between items-center bg-white w-full">
      <NavLink className={`text-3xl font-bold leading-none`} to="/">
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
        className={`lg:flex lg:items-center lg:w-auto lg:space-x-4 ${
          isOpen ? "block" : "hidden"
        } absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0`}
      >
        <li>
          <Link  smooth={true} duration={500}
            className={`block lg:inline-block text-xl hover:text-primary-base font-semibold hover:underline py-2 lg:py-0 lg:mr-8 ${linkStyle(
              "/"
            )}`}
            to="header"
          >
            <NavLink  to="/">Home</NavLink>
          </Link>
        </li>


        <li>
          <Link smooth={true} duration={500}
            className={`block lg:inline-block text-xl hover:text-primary-base font-semibold hover:underline py-2 lg:py-0 lg:mr-8 ${linkStyle(
              "/event"
            )}`}
            to="header"
          >
            <NavLink  to="/event">Event</NavLink>
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500}
            className={`block lg:inline-block text-xl hover:text-primary-base font-semibold hover:underline py-2 lg:py-0 lg:mr-8 ${linkStyle(
              "/gallery"
            )}`}
            to="header"
          >
            <NavLink  to="/gallery">Gallery</NavLink>
          </Link>
        </li>

        <li>
          <Link smooth={true} duration={500}
            className={`block lg:inline-block text-xl hover:text-primary-base font-semibold hover:underline py-2 lg:py-0 lg:mr-8 ${linkStyle(
              "/blog"
            )}`}
            to="header"
          >
            <NavLink  to="/blog">Blog</NavLink>
          </Link>
        </li>
        <li>
          <Link smooth={true} duration={500}
            className={`block lg:inline-block text-xl hover:text-primary-base font-semibold hover:underline py-2 lg:py-0 lg:mr-20 ${linkStyle(
              "/about"
            )}`}
            to="header"
          >
            <NavLink  to="/about">About</NavLink>
          </Link>
        </li>
        <li className="mt-4 lg:mt-0 lg:ml-auto">
          <NavLink
            className={`block lg:inline-block py-2 px-6 border bg-primary-base hover:bg-primary-dark text-white  text-sm font-bold rounded-xl ${linkStyle(
              "/signup"
            )}`}
            to="/signup"
          >
            Sign Up
          </NavLink>
        </li>
        <li className="mt-4 lg:mt-0">
          <NavLink
            className={`block lg:inline-block py-2 px-6 border border-primary-base hover:bg-primary-base hover:text-white  text-sm font-bold rounded-xl ${linkStyle(
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
