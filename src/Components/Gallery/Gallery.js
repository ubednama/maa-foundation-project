import React from "react";
import Hcomp from "./HoverComp";

const Gallery = () => {
  return (
      <div className="m-[8.5vw]">       
        <section className="flex flex-wrap justify-between">
          <div>
            <p className="text-5xl font-[700] md:w-[39vw]">
              Empowering Women Our{" "}
              <span className="text-primary-base">Mission in Action</span>
            </p>
            <p className="pt-8 text-xl md:w-[30vw]">
              Explore our journey of empowering women through impactful
              initiatives. Witness the transformation and strength in every story
              captured in our mission-driven gallery
            </p>
            <button className="btn-primary mt-11">
              Contact Us
            </button>
          </div>
          <img className=" md:h-[44vw] hidden md:flex" src="/gallery/heroImage1.jpeg" alt="hero_image" />
        </section>
        <section className="grid  md:grid-cols-3 gap-12 mt-40 ">
            <div className="bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall2.jpeg')" }}>
              <Hcomp heading={"Women Education"} text={"Explore the inspiring Women Educating Programme by Maa Foundation, empowering women through education to create brighter futures. Witness their journey and achievements here."} />
            </div>
            <div className="md:col-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall3.jpeg')" }}>
              <Hcomp heading={"Women Entreprenuer"} text={"Richa Bashistha, founder of Maa Foundation, is a dedicated women entrepreneur committed to empowering communities. Her vision and leadership drive positive change, fostering growht and opportunites for all."}/>
            </div>
            <div className="bg-center bg-cover md:col-span-2 row-span-3 h-[60vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall2.jpeg')" }}>
              <Hcomp heading={"Ma & Child Care program"} text={"Explore our Ma & Child Care program gallery. showcasing herartwarning moments and impactful initiatives dedicated to nurturing maternal and child health at the Maa Foundation"}/>
            </div>
            <div className="md:row-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall4.jpeg')" }}>
              <Hcomp heading={"Skill Development"} text={"Explore our Women's Skill Developemnt Program: Empowering Women with Essential Skills for a Brighter Future at Maa Foundation."}/>
            </div>
            <div className="md:row-span-2 bg-cover bg-center h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall2.jpeg')" }}>
              <Hcomp heading={"Eye Care Camp"} text={"Explore our Eye Care Medical Camp gallery-transforming lives through vision care. Witness our impact firsthand."}/>
            </div>
            <div className="bg-center bg-cover md:h-[16vw] h-[38vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall7.jpeg')" }}>
              <Hcomp heading={"Women Education"} text={"Explore our impactful free medical camps. Witness how Maa Foundation serves communities through healthcare initiatives."}/>
            </div>
            <div className="bg-center bg-cover rounded-md md:h-[16vw] h-[38vw]" style={{ backgroundImage: "url('/gallery/gall7.jpeg')" }}>
              <Hcomp heading={"Women Education"} text={"Explore our impactful free medical camps. Witness how Maa Foundation serves communities through healthcare initiatives."}/>
            </div>
            <div className=" md:col-span-3 bg-cover bg-center h-[40vw] rounded-md" style={{ backgroundImage: "url('/gallery/gall1.jpeg')" }}>
              <Hcomp heading={"Richabashistha's Seminar"} text={"Richa Bashistha. Founder of Maa Foundation is a dedicated advocate for community developemnt. She recently engaged with stakeholders. Highlighting her commitment to impactful change and fostering collaborative efforts for sustainable growht."}/>
            </div>
        </section>
      </div>
  );
};



export default Gallery;
