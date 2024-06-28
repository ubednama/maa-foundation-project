import React from "react";
import InputText from "../Common/InputText/InputText";
import Heading from "./Heading";

const VolunteerElement = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <Heading fHeading="Become a" sHeading="Volunteer" />
      </div>
      <section
        className="volunteer w-full h-[882px] bg-cover bg-center bg-no-repeat mt-2 md:mt-10 "
        style={{
          background: `linear-gradient(261.68deg, #ffffff 6.38%, #ffffff 11.65%, #ffffff 17.15%, #ffffff 20.6%, #ffffff 24.43%, #ffffff 36.62%, #ffffff 41.71%, #ffffff 45.65%, rgba(203, 203, 203, 0.1) 89.6%), url('/assets/volunteer.png')`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center sm:h-full justify-center sm:justify-end sm:mr-[5%]">
          <form className="mt-2 space-y-3 xl:space-y-5 sm:mt-10 w-[80%] sm:w-full sm:max-w-96 lg:max-w-md xl:max-w-lg">
            <InputText placeholder={"Your Name"} name={"name"} />
            <InputText placeholder={"Your Mail"} name={"mail"} />
            <InputText
              placeholder={"Your Number (optional)"}
              name={"phoneNumber"}
            />
            <InputText placeholder={"DOB"} name={"dob"} />
            <InputText placeholder={"Your Address"} name={"your address"} />
            <textarea
              className="w-full h-[184px] mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
              rows="10"
              placeholder="Why You Want to Join as Volunteer?"
            />

            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-bold font-medium text-gray-900 dark:text-gray-300"
              >
                Agree to the terms and conditions.
              </label>
            </div>
            <div className="flex items-center">
              <button className="text-white  bg-[#EC1D1E] p-2 px-8 btn- rounded-xl mx-auto ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VolunteerElement;