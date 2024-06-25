import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "./blogsdata"
import { image } from "./blogsdata";
import BlogsOpenPageCard from "./BlogsOpenPageCard";

const BlogOpenPage = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  const { blogdataId } = useParams();
  const coverImage = blogsData[blogdataId - 1].coverImage;
  const title = blogsData[blogdataId - 1].title;
  const author = blogsData[blogdataId - 1].author;
  const authorImage = blogsData[blogdataId - 1].authorImage;
  const date = blogsData[blogdataId - 1].date;
  const data = blogsData[blogdataId - 1].data;
  return (
    <div className=" bg-[#ffdede2c]">
      <div className="w-full h-auto">
        <img className="w-full" src={coverImage} alt="" />
      </div>
      <div className="flex justify-between px-3 md:px-5 lg:px-10 py-2">
        <div className="details flex sm:flex-row flex-col gap-[10px] sm:gap-[20px] md:gap-[40px] items-center bottom-0">
          <div className="flex items-center gap-[8px]">
            <div className="h-[30px] w-[30px] overflow-hidden rounded-full">
              <img src={authorImage} alt="" />
            </div>
            <div className="text-[15px] sm:text-[20px] font-medium text-[#E03233]">
              {author}
            </div>
          </div>
          <div className="font-medium text-[15px] sm:text-[18px] text-[#9B9B9B]">
            {date}
          </div>
        </div>
        <div>
          <img className="h-[60px] sm:h-[80px]" src={image.share} alt="" />
        </div>
      </div>

      <div className="py-4 sm:py-10 lg:py-20 flex justify-center items-center bg-[#ec1d1d3b] text-[25px] sm:text-[35px] lg:text-[45px] font-semibold px-8 sm:px-14 lg:px-28">
        {title}
      </div>

      <div className="text-[18px] sm:text-[20px] lg:text-[25px] flex flex-col px-8 sm:px-14 lg:px-28">
        <div>
          {data.map((item) => {
            return (
              <p className="my-[30px]">
                <span className="text-[#E03233] font-medium">
                  {item.datatitle} :{" "}
                </span>
                {item.datadesc}
              </p>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col h-[730px] overflow-y-scroll w-full justify-center gap-3 items-center">

      {blogsData.map((item) => {
          return (
              <BlogsOpenPageCard
              id={item.id}
              coverImage={item.coverImage}
              authorImage={item.authorImage}
              title={item.title}
              sample_data={item.sample_data}
              author={item.author}
              date={item.date}
              />
              );
              })}
            </div>
    </div>
  );
};

export default BlogOpenPage;
