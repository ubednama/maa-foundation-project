import React from "react";
import { Link } from "react-router-dom";

const BlogsOpenPageCard = ({
  id,
  coverImage,
  authorImage,
  title,
  author,
  date,
  sample_data,
}) => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Link onClick={() => scrollToTop()} to={`/blogdata/${id}`}>
        <div className="flex flex-col md:flex-row md:w-[800px] lg:w-[1010px] p-2 bg-white rounded-lg">
          <div className="">
            <div className="h-[230px] w-full md:w-[360px] flex justify-center items-center overflow-hidden">
              <img className="h-[230px] rounded-md" src={coverImage} alt="" />
            </div>
          </div>

          <div className="details flex flex-col justify-around px-5 ">
            <div>
              <div className="text-[20px] lg:text-[24px] font-semibold">{title}</div>
              <div className="flex text-[#A1A1A1] text-[16px] lg:text-[20px]">
                {sample_data}
              </div>
            </div>
            <div className="flex w-full mt-4 lg:mt-0 items-center">
              <div className="flex items-center gap-[8px]">
                <div className="h-[36px] w-[36px] overflow-hidden rounded-full">
                  <img src={authorImage} alt="" />
                </div>
                <div className="text-[16px] font-medium text-[#E03233]">
                  {author}
                </div>
              </div>
              <div className="font-normal text-[#9B9B9B] ml-5">{date}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogsOpenPageCard;