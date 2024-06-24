import React from "react";
import { Link } from "react-router-dom";

const BlogsCard = ({ id, coverImage, authorImage, title, author, date }) => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Link onClick={() => scrollToTop()} to={`/blogdata/${id}`}>
        <div className="card gap-[32px] flex flex-col justify-between w-[378.3px] h-auto p-[8px] bg-[white] rounded-lg">
          <div className="flex flex-col gap-[6px]">
            <div className="h-[240px] w-[360px] overflow-hidden rounded-lg object-fill">
              <img className="h-[240px] w-[360px]" src={coverImage} alt="" />
            </div>
            <div className="text-[24px] font-semibold">{title}</div>
          </div>
          <div className="details flex justify-between items-center bottom-0">
            <div className="flex items-center gap-[8px]">
              <div className="h-[36px] w-[36px] overflow-hidden rounded-full">
                <img src={authorImage} alt="" />
              </div>
              <div className="text-[16px] font-medium text-[#E03233]">
                {author}
              </div>
            </div>
            <div className="font-normal text-[#9B9B9B] mr-5">{date}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogsCard;
