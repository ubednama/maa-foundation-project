import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-red-200">
      <div className="py-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-4 gap-4">
          {/* First Div */}
          <div className="p-4 flex flex-col ">
            <img
              alt="maa"
              src="/assets/maa-logo.png"
              className="mb-4 w-44 h-20"
            />
            <p>
              Empowering communities through education, healthcare, and
              sustainable development, Maa Foundation is dedicated to creating
              lasting positive change and uplifting lives across India
            </p>
          </div>

          {/* Second Div */}
          <div className="p-10 ml-10">
            {/* <h2 className="text-2xl font-bold mb-4">Quick Links</h2> */}
            <div className="grid grid-cols-2 gap-4">
              {/* Inner Div 1 */}
              <div>
              <ul className="space-y-2">.
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                  <li>
                    <NavLink to="#" className={"hover:text-primary-base hover:underline"}>
                      Objective
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className={"hover:text-primary-base hover:underline"}>
                      Volunteer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className={"hover:text-primary-base hover:underline"}>
                      Donate
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Inner Div 2 */}
              <div>
              <ul className="space-y-2 px-8 mt-6">
              <h2 className="text-2xl font-bold mb-4">Shortcuts</h2>
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
            </div>
          </div>

          {/* Third Div */}
          <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">Get Updated</h2>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field-primary mb-4 bg-inherit"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-center text-sm btn-primary -mt-2"
                type="button"
              >
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <h2 className="mb-4 text-primary-base">Follow on</h2>
              <NavLink>
                <img src="/assets/socials/instagram.svg" alt="Instagram" />
              </NavLink>
              <NavLink>
                <img src="/assets/socials/fb.svg" alt="Facebook" />
              </NavLink>
              <NavLink>
                <img src="/assets/socials/x.svg" alt="Twitter" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
