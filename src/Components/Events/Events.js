import React from "react";
import { events } from "../Utils/Constant";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="flex flex-col gap-52 m-7">
      {events.map((data, index) => (
        <EventCard
          key={index}
          image={data.image}
          title={data.title}
          subtitle={data.subtitle}
          path={data.path}
          flag={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
        ></EventCard>
      ))}
    </div>
  );
};

export default Events;
