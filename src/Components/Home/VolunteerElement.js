import React, { useState } from "react";
import Heading from "./Heading";
import validator from "validator";

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
            <input
              className="input-field-primary"
              placeholder="Your Name"
              name="name"
              value={volunteerData.name}
              onChange={handleChange}
            />
            <input
              className="input-field-primary"
              placeholder="Your email"
              name="email"
              value={volunteerData.email}
              onChange={handleChange}
            />
            <div className="flex items-center gap-1">
              <span className="input-field-primary text-sm w-fit">+91</span>
              <input
                className="input-field-primary"
                placeholder="Your Number (optional)"
                name="phoneNumber"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                type="tel"
                value={volunteerData.phoneNumber}
                onChange={handleChange}
                maxLength={10}
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="input-field-primary text-sm min-w-[100px] lg:min-w-[120px] w-fit">Date of Birth:</span>
              <input
                className="input-field-primary max-h-[2.38rem] lg:max-h-[2.88rem] min-w-[120px]"
                type="date"
                placeholder="DOB"
                name="dob"
                value={volunteerData.dob}
                onChange={handleChange}
              />
            </div>


            <input
              className="input-field-primary"
              placeholder="Your Address"
              name="address"
              value={volunteerData.address}
              onChange={handleChange}
            />
            <textarea
              className="input-field-primary w-full h-[184px] mb-5 text-sm"
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
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-700 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-bold font-medium text-gray-900 dark:text-gray-300"
              >
                Agree to the terms and conditions.
              </label>
            </div>
            <div className="flex items-center">
              <button className="btn-primary mx-auto ">
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