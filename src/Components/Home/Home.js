/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "../Common/Card/Card";
import DonateElement from "./DonateElement";
import VolunteerElement from "./VolunteerElement";
import { NavLink } from "react-router-dom";
import Heading from "./Heading";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="p-4 flex flex-col justify-center items-center md:items-start">
          {/* First div content */}
          <h1 className="text-lg  sm:text-4xl md:text-4xl lg:text-5xl mb-4">
            Leading the Way to Women's{" "}
            <b className="text-primary-base font-bold">Empowerment</b>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            Empowering women to lead with confidence and strength. Join us in
            creating a world of equality and opportunity for all women.
          </p>
          <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl">
            <NavLink to="/contact" className="" >Contact Us</NavLink>
          </button>
        </div>
        <div className=" p-4 flex justify-center items-center">
          {/* Second div content with image */}
          <img
            alt="map"
            src="assets/map.png"
            className="w-full h-auto md:w-3/4 lg:w-2/3"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-12 text-center">
        <Heading fHeading="Our" sHeading="Objective" />
      </div>

      <div className="flex flex-wrap justify-center h-auto m-4 md:m-16 mb-2">
      {/* <div className="flex flex-wrap justify-center h-auto md:h-[699.96px] m-4 md:m-16 mb-2"> */}
        <Card
          imgSrc={"assets/womenEmpowerment.png"}
          cardTitle={"Women Empowerment"}
          cardDescription={
            "We focus on providing equal opportunities for women in the work field. We do also skill development programme for women."
          }
        />
        <Card
          imgSrc={"assets/childCare.png"}
          cardTitle={"Mother & Child Care"}
          cardDescription={
            "Empowering mothers and nurturing children for a nice healthier, brighter future. Together, we thrive."
          }
        />
        <Card
          imgSrc={"assets/medical.png"}
          cardTitle={"Free Medical Camp"}
          cardDescription={
            "Providing free medical check-ups and essential healthcare services to undeserved communities."
          }
        />
      </div>

      <VolunteerElement />
      <div className="mt-32 mb-16">
        <div className="flex justify-center items-center ">
          <Heading fHeading="Become a" sHeading="Contributor" />
        </div>
       
        <section
          className="w-full h-auto md:h-[790px] lg:h-[844px] mb-10 flex justify-center sm:block"
          style={{
            background: `linear-gradient(89.63deg,#ffffff 39.45%,rgba(0, 0, 0, 0.62) 70.46%), 
    url('/assets/maa.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "screen",
          }}
        >
          <div className="w-full max-w-sm  md:max-w-lg m-4 p-4 md:m-16">
            <div className="w-full max-w-md mt-6">
              <span className="font-medium text-primary-base text-xl sm:text-lg md:text-xl lg:text-2xl leading-8 tracking-wide block text-center">
                MAA FOUNDATION
              </span>
              <span className="font-normal font-lato text-base sm:text-sm md:text-base lg:text-lg leading-6 tracking-wide block text-center mt-4">
                has been working in India for over 70 years, for the upliftment of marginalized women and girls through 53 programmes in 18 states and 130+ districts.
              </span>
              <p className="input-field-primary mt-4 text-normal w-full">
                MAA FOUNDATION PAN NUMBER : A125D4G46d
              </p>
              <div className="mt-4">
                <DonateElement />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
