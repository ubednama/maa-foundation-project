import React, { useState } from "react";
import InputText from "../Common/InputText/InputText";
import Heading from "./Heading";
import validator from "validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VolunteerElement = () => {

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    // dob: "",
    address: "",
    reason: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phoneNumber") {
      const formattedValue = value.replace(/\D/g, '').slice(0, 10);
      setVolunteerData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    } else {
      setVolunteerData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ToDo: Process Volunteer data
    if (volunteerData.email.trim() !== "" && validator.isEmail(volunteerData.email)) console.log("Volunteer Data:", volunteerData);
    else {
      //ToDo: display toast here for invalid email
    }
  };

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
          <form className="mt-2 space-y-3 xl:space-y-5 sm:mt-10 w-[80%] sm:w-full sm:max-w-96 lg:max-w-md xl:max-w-lg"
            onSubmit={handleSubmit}>
            <InputText
              placeholder={"Your Name"}
              name={"name"}
              value={volunteerData.name}
              onChange={handleChange}
            />
            <InputText
              placeholder={"Your email"}
              name={"email"}
              value={volunteerData.email}
              onChange={handleChange}
            />
            <div className="flex items-center gap-1">
              <span className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 px-3 py-2.5">+91</span>
              <InputText
                placeholder={"Your Number (optional)"}
                name={"phoneNumber"}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                type="tel"
                value={volunteerData.phoneNumber}
                onChange={handleChange}
                maxLength={10}
              />
            </div>
            {/* <InputText
              placeholder={"DOB"}
              name={"dob"}
              value={volunteerData.dob}
              onChange={handleChange}
            /> */}
            <div className="flex items-center gap-1 w-full">
              <span className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 px-3 py-2.5 w-1/3">Date of Birth:</span>
              <div className="w-2/3 flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
                <DatePicker
                  className="dark:border-gray-600 border-gray-300 bg-gray-100 dark:bg-gray-700 p-2.5 lg:p-4"
                  selected={dateOfBirth}
                  onChange={(date) => setDateOfBirth(date)}
                />
              </div>
            </div>


            <InputText
              placeholder={"Your Address"}
              name={"address"}
              value={volunteerData.address}
              onChange={handleChange}
            />
            <textarea
              className="w-full h-[184px] mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
              rows="10"
              placeholder="Why You Want to Join as Volunteer?"
              name="reason"
              value={volunteerData.reason}
              onChange={handleChange}
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