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
        <div className="flex flex-col md:flex-row p-2 bg-white rounded-lg gap-3">
          <div className="">
            <div className="h-56 w-full md:w-[360px] flex justify-center items-center overflow-hidden">
              <img className="h-56 w-full rounded-md" src={coverImage} alt="" />
            </div>
          </div>

          <div className="details flex flex-col justify-around gap-4 px-5">
            <div className="text-xl lg:text-2xl font-semibold">{title}</div>
            <div className="flex text-gray-dark lg:text-xl">{sample_data}</div>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="size-9 overflow-hidden rounded-full">
                  <img src={authorImage} alt="" />
                </div>
                <div className="font-medium text-primary-base">
                  {author}
                </div>
              </div>
              <div className="font-normal text-[#9B9B9B]">{date}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogsOpenPageCard;
