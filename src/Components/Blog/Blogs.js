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
        <div className="absolute inset-0 flex flex-col justify-center p-4 sm:pl-10 lg:pl-[10%] lg:py-[8%]">
    <p className="font-[600] text-[32px] w-[386px] sm:text-[40px] lg:text-[55px] text-black mb-2 sm:mb-4 lg:pb-10">
      Blogs
    </p>
    <p className="font-[600] text-[20px] sm:text-[24px] lg:text-[27px] text-red-600 mb-1 sm:mb-2 lg:mb-4">
      Voice of Empowerment
    </p>
    <p className="font-[400] text-[16px] sm:text-[20px] lg:text-[28px] text-black leading-normal mb-1 sm:mb-2 lg:mb-4">
      Amplifying Women's Strength and Influence
    </p>
      </div>
        
      </div>

      <div className="bg-secondary pt-5 md:pt-10 lg:pt-20">
        <div className="card-container w-full h-auto flex flex-wrap justify-center gap-[45px]">
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
          <button className="btn-primary ">
            View more
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
