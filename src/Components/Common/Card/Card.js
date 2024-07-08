import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imgSrc, cardTitle, cardDescription, link = "#" }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div>
        <img src={imgSrc} alt="" className="w-full h-auto" />
      </div>

      <div className="flex flex-col justify-between h-40">
        <div>
          <h2 className="font-semibold mt-2 leading-9 text-xl">{cardTitle}</h2>
          <p className="font-light text-lg">{cardDescription}</p>
        </div>
        <NavLink to={link} className="flex items-center text-red-500 hover:text-red-600transition duration-300">
          <span className="font-medium">Learn more</span>
          <svg
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
    </div>
  );
};

export default Card;
