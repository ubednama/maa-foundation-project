// This page is dedicated to events that are shown on full page

// necessary imports
import React from "react";
import { events } from "../Utils/Constant";
import EventCard from "./EventCard";

const Events = () => {
  return (
    // main div
    <div className="flex flex-col gap-20 xl:gap-52 m-7">
      {events.map((data, index) => (
        <EventCard
          key={index}
          image={data.image}
          title={data.title}
          subtitle={data.subtitle}
          path={data.path}
          // flag is used to allign events from left to right and right to left accordingly
          flag={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
        ></EventCard>
      ))}
    </div>
  );
};

export default Events;
