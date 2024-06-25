// This page is dedicated to events that are shown on full page

// necessary imports
import React from "react";
import { events } from "../Utils/Constant";
import EventCard from "./EventCard";
import { NavLink } from "react-router-dom";

const Events = () => {
  return (
    // main div
    <div className="flex flex-col gap-20 xl:gap-52 justify-center items-center ">
      {/* hero section */}
      <div className="w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="p-4 flex flex-col justify-center items-center md:items-start">
            {/* First div content */}
            <h1 className="text-lg  sm:text-4xl md:text-4xl lg:text-5xl mb-4 font-bold">
              Transformative Programs for a{" "}
              <b className="text-[#EC1D1E] font-bold">Brighter Future</b>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
              Empowering Women Celebrating Strength and Independence - Explore
              Our Transformative Programs Driving Women's Rights, Education, and
              Economic Opportunities for a Brighter Future.
            </p>
            <button className="font-lato font-medium bg-[#EC1D1E] text-white px-4 py-2 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
              <NavLink to="/contact">Contact Us</NavLink>
            </button>
          </div>
          <div className=" p-4 flex justify-center items-center">
            {/* Second div content with image */}
            <img
              alt="map"
              src="assets/eventMap.png"
              className="w-11/12 h-auto "
            />
          </div>
        </div>
      </div>

      {/* event list */}
      {events.map((data, index) => (
        <EventCard
          key={index}
          image={data.image}
          title={data.title}
          subtitle={data.subtitle}
          path={data.path}
          index={index}
        ></EventCard>
      ))}
    </div>
  );
};

export default Events;
