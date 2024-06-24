import React from "react";
import blogsData from "./blogsdata";
import BlogsCard from "./BlogsCard";
import { image } from "./blogsdata";

const Blogs = () => {
  return (
    <>
      <div className="relative">
        {/* Background Image */}
        <img
          className="w-full h-auto object-cover"
          src={image.heroimg}
          alt=""
        />

        {/* Absolute Positioned Content */}
        <div className="pl-3 sm:pl-10 absolute inset-0 flex flex-col justify-center lg:pl-[10%] lg:py-[8%]">
          <p className="font-semibold text-3xl lg:text-5xl text-black mb-4 lg:mb-6">
            Blogs
          </p>
          <p className="font-inter text-lg lg:text-3xl font-semibold text-red-600 mb-2 lg:mb-4">
            Voice of Empowerment
          </p>
          <p className="font-itim text-base lg:text-xl font-normal text-black leading-normal mb-2 lg:mb-4">
            Amplifying Women's Strength and Influence
          </p>
        </div>

        {/* Media Query for Smaller Dimensions */}
        <style jsx>{`
          @media (max-width: 499px) {
            .lg:pl-[10%],
            .lg:py-[8%] {
              padding-left: 5%; /* Adjust padding for smaller screens */
              padding-right: 5%;
              padding-top: 8%;
              padding-bottom: 8%;
            }
            .text-3xl {
              font-size: 2rem; /* Decrease font size for smaller screens */
            }
            .text-lg {
              font-size: 1.125rem;
            }
            .text-base {
              font-size: 0.875rem;
            }
          }
        `}</style>
      </div>

      <div className="bg-[#ffdede59] pt-5 md:pt-10 lg:pt-20">
        <div className="card-container w-full h-auto flex flex-wrap justify-center gap-[30px]">
          {blogsData.map((item) => {
            return (
              <BlogsCard
                id={item.id}
                coverImage={item.coverImage}
                authorImage={item.authorImage}
                title={item.title}
                author={item.author}
                date={item.date}
              />
            );
          })}
        </div>
        <div className="w-full flex justify-center h-[300px] items-center">
          <button className="h-[50px] w-[115px] flex justify-center items-center bg-[#FF0000] text-[20px] text-white font-normal rounded-[4px]">
            View more
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
