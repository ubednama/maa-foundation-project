import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imgSrc, cardTitle, cardDescription, link = "#" }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <img src={imgSrc} alt="" className="w-full h-auto" />
      <h2 className="font-semibold mt-2 leading-9 text-xl">{cardTitle}</h2>
      <p className="font-light font-lato text-lg">{cardDescription}</p>
      <NavLink to={link} className="flex items-center mt-4 text-blue-500 hover:text-blue-700 transition duration-300">
        <span className="font-medium">Learn more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </NavLink>
    </div>
  );
};

export default Card;
