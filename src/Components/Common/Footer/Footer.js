import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="bg-secondary">
      <div className="py-10 mx-16 flex justify-between gap-4 text-gray-dark font-light">
        {/* First Div */}
        <div className="p-4 flex flex-col ">
          <img
            alt="maa"
            src="/assets/maa-logo.png"
            className="mb-4 w-44 h-20"
          />
          <p className="w-80 text-[#0B0B0B]">
            Empowering communities through education, healthcare, and
            sustainable development, Maa Foundation is dedicated to creating
            lasting positive change and uplifting lives across India
          </p>
        </div>

        <div>
          <ul className="space-y-2 mt-6">.
            <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Quick Links</h2>
            <li>
              <Link to="objective" smooth={true} duration={500} className="hover:text-primary-base hover:underline cursor-pointer ">
                <NavLink to="/" >Objective</NavLink>
              </Link>
            </li>
            <li>
              <Link to="volunteer" smooth={true} duration={500} className="hover:text-primary-base hover:underline cursor-pointer">
                <NavLink to="/">Volunteer</NavLink>
              </Link>
            </li>
            <li>
              <Link to="donateSection" smooth={true} duration={500} className="hover:text-primary-base hover:underline cursor-pointer">
                <NavLink to="/">Donate</NavLink>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="space-y-2 mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Shortcuts</h2>
            <li>
              <NavLink to="/blog" className={"hover:text-primary-base hover:underline"}>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={"hover:text-primary-base hover:underline"}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={"hover:text-primary-base hover:underline"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>


        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Get Updated</h2>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field-primary mb-4 bg-inherit w-80"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-center text-sm btn-primary -mt-2"
              type="button"
            >
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4">
            <h2 className="mb-4 text-primary-base font-semibold">Follow on</h2>
            <NavLink>
              <img src="/assets/socials/instagram.svg" className="h-[25px] hover:h-[30px] hover:transition-all  hover:duration-300  hover:ease-in-out " alt="Instagram" />
            </NavLink>
            <NavLink>
              <img src="/assets/socials/fb.svg" alt="Facebook" className="h-[24px] hover:h-[30px] hover:transition-all  hover:duration-300  hover:ease-in-out" />
            </NavLink>
            <NavLink>
              <img src="/assets/socials/x.svg" alt="Twitter" className="h-[24px] hover:h-[30px] hover:transition-all  hover:duration-300  hover:ease-in-out" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
