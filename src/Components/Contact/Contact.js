import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-28">
          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="text-neutral-950 text-3xl lg:text-5xl font-bold leading-tight lg:leading-10 text-center lg:text-left">
              Get in Touch with{" "}
              <span className="text-red-600 ml-2 lg:ml-0 mt-4 leading-snug">
                Maa Foundation
              </span>
            </div>

            <div className="flex flex-col justify-start items-start gap-4 lg:gap-11 mt-4 lg:mt-8">
              <div className="w-full lg:w-2/3 text-neutral-600 text-base lg:text-xl font-normal leading-7 text-center lg:text-left">
                Connect with Maa Foundation for inquiries, support, or to get
                involved. We're here to answer your questions and collaborate
                for a better future.
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full max-w-xs lg:max-w-full h-auto object-cover"
              src="./contact/MapIMG.jpg"
              alt="Maa Foundation"
            />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 mx-4 lg:mx-28">
          <div className="flex flex-wrap justify-center  w-full lg:w-1/2 -mt-12">
            <div className=" p-4 mt-inherit">
              <div className="w-5/6">
                <p className="text-lg lg:text-xl font-normal leading-9 text-zinc-900 mt-8 ">
                  <span className="text-lg lg:text-xl  text-red-600 mb-4">
                    MAA FOUNDATION{" "}
                  </span>
                  has been working in India for over 70 years, for the
                  upliftment of marginalised women and girls through 53
                  programmes in 18 states and 130+ districts.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex ">
                  <div className="w-7 h-6">
                    <img
                      src="./contact/lets-icons_message-light.jpg"
                      alt="Email Icon"
                    />
                  </div>
                  <p className="ml-2 text-lg lg:text-xl text-zinc-900 mb-4">
                    maafoundataion@gmail.com
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6">
                    <img
                      src="./contact/solar_phone-linear.jpg"
                      alt="Phone Icon"
                    />
                  </div>
                  <p className="ml-2 text-lg lg:text-xl text-zinc-900 mb-4">
                    +91 9865327856, +91 9785694325
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6">
                    <img
                      src="./contact/basil_location-outline.jpg"
                      alt="Location Icon"
                    />
                  </div>
                  <p className="ml-2 text-lg lg:text-xl text-zinc-900">
                    iugawsdiegaiu,adgy,Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-gray-300 mx-4 lg:mx-12 my-8 lg:my-0"></div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 flex justify-center  mt-8 lg:mt-0">
            <form className="w-full max-w-lg">
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your Mail"
                  className="input-field-primary text-base lg:text-xl"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="input-field-primary text-base lg:text-xl "
                />
                <textarea
                  placeholder="Provide Feedback"
                  className="input-field-primary text-base lg:text-xl"
                  rows="5"
                />
              </div>
              <div className="mt-4 flex justify-start">
                <button className="btn-primary lg:text-lg">
                  Feedback
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="my-20 mx-4">
          <iframe
            title="Map"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}
