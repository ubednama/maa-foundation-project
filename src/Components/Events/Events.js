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
      {/* herosection */}
      <div className="w-11/12 flex justify-center items-center mt-12">
        {/* inner div */}
        <div className="w-full flex md:flex-row flex-col-reverse  justify-between">
          <div className="p-4 flex gap-7 flex-col justify-center items-center md:items-start">
            {/* First div content */}
            <div className="text-neutral-950 text-3xl lg:text-5xl font-bold leading-tight lg:leading-10 text-center lg:text-left">
              Transformative Programs for a{" "}
              <span className="text-red-600 ml-2 lg:ml-0 mt-4 leading-relaxed">
                Brighter Future
              </span>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
              Empowering Women Celebrating Strength and Independence - Explore
              Our Transformative Programs Driving Women's Rights, Education, and
              Economic Opportunities for a Brighter Future.
            </p>
            <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl">
              <NavLink to="/contact">Contact Us</NavLink>
            </button>
          </div>

          <div className="w-full flex justify-end items-center">
            {/* Second div content with image */}
            <img
              alt="map"
              src="assets/eventMap.png"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      </div>

      {/* event list */}
      <div className="w-11/12 mb-48 flex flex-col gap-40">
        {events.map((data, index) => (
          <EventCard
            key={index}
            image={data.image}
            title={data.title}
            subtitle={data.subtitle}
            path={data.path}
            id={data.id}
            index={index}
          ></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
