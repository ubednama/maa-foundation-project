import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    location.pathname === path ? "text-red-600 underline":"text-black-500";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className="relative py-4 flex justify-between items-center bg-secondary-light w-full px-20 pb-8">
      <NavLink className={`text-3xl font-bold leading-none`} to="/">
        <img
          alt="maa-logo"
          className="h-14"
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
        {[
          ["Home", "/" ],
          ["Event", "/event", ],
          ["Gallery", "/gallery" ],
          ["Blog", "/blog" ],
          [ "About", "/about" ],
        ].map(([title, url]) => (
          <li key={url}>
            <Link
              smooth={true}
              duration={500}
              className={`nav-link ${linkStyle(url)}`}
              to="header"
            >
              <NavLink to={url}>{title}</NavLink>
            </Link>
          </li>
        ))}
        <li className="mt-4 lg:mt-0">
          <NavLink
            className={`block lg:inline-block py-2 px-6 border border-primary-base  bg-primary-base hover:bg-primary-dark text-white  text-sm font-bold rounded-xl ${linkStyle(
              "/signup"
            )} no-underline`}
            to="/signup"
          >
            Sign Up
          </NavLink>
        </li>
        <li className="mt-4 lg:mt-0">
          <NavLink
            className={`block lg:inline-block py-2 px-6 border border-primary-base hover:bg-primary-base hover:text-white  text-sm font-bold rounded-xl ${linkStyle(
              "/login"
            )} no-underline`}
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
