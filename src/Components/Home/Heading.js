import React from "react";

const Heading = ({ fHeading, sHeading }) => {
  return (
    <h1 className="text-4xl lg:text-5xl mb-2">
      {fHeading} <b className="text-[#EC1D1E] font-bold">{sHeading}</b>
    </h1>
  );
};

export default Heading;
