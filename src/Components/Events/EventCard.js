import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const EventCard = ({ image, title, subtitle, path, flag }) => {
  console.log(flag);
  return (
    // main div
    <div className="w-full flex justify-center">
      <div
        className={`w-11/12 flex xl:${flag} flex-col justify-center items-center xl:gap-24 gap-4 `}
      >
        <img src={image} className=""></img>

        <div className="flex flex-col justify-center items-start gap-9 max-w-[590px]">
          <div className="font-semibold md:text-[40px] text-[30px]">
            {title}
          </div>
          <div className="font-normal text-[18px] text-[#666666]">
            {subtitle}
          </div>
          <Link to={path}>
            <button className="flex items-center justify-center gap-3 font-bold text-blue-500 hover:text-blue-700">
              Learn More <GoArrowRight></GoArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
