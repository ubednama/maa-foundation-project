import React, { useState } from "react";
import validator from "validator";

const VolunteerElement = () => {

  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
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
    console.log("submit clicked")
    // ToDo: Process Volunteer data
    if (volunteerData.email.trim() !== "" && validator.isEmail(volunteerData.email)) console.log("Volunteer Data:", volunteerData);
    else {
      //ToDo: display toast here for invalid email
    }
  };

  const isFormValid = volunteerData.name && volunteerData.email && validator.isEmail(volunteerData.email) && volunteerData.dob && volunteerData.address && volunteerData.reason && volunteerData.agreed;

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <h1 className="heading leading-snug">
          <span className="">Become a </span>
          <span className="main-heading">Volunteer</span>
        </h1>
      </div>
      <section
        className="volunteer w-full h-[882px] bg-cover bg-center bg-no-repeat mt-2 md:mt-6 "
        style={{
          background: `linear-gradient(261.68deg, #ffffff 6.38%, #ffffff 11.65%, #ffffff 17.15%, #ffffff 20.6%, #ffffff 24.43%, #ffffff 36.62%, #ffffff 41.71%, #ffffff 45.65%, rgba(203, 203, 203, 0.1) 89.6%), url('/assets/volunteer.png')`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center sm:h-full justify-center sm:justify-end sm:mr-[5%] lg:mr-20">
          <form className="mt-2 space-y-3 xl:space-y-6 sm:mt-10 w-[80%] sm:w-full sm:max-w-96 lg:max-w-md xl:max-w-lg"
            onSubmit={handleSubmit}>
            <input autoFocus
              className="input-field-primary"
              placeholder="Your Name"
              name="name"
              value={volunteerData.name}
              onChange={handleChange}
            />
            <input autoFocus
              className="input-field-primary"
              placeholder="Your email"
              name="email"
              value={volunteerData.email}
              onChange={handleChange}
            />
            <div className="flex items-center gap-1">
              <span className="input-field-primary text-sm w-fit">+91</span>
              <input autoFocus
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
              <input autoFocus
                className="input-field-primary max-h-[2.38rem] lg:max-h-[2.88rem] min-w-[120px]"
                type="date"
                placeholder="DOB"
                name="dob"
                value={volunteerData.dob}
                onChange={handleChange}
                max={new Date(new Date().setFullYear(new Date().getFullYear() - 16)).toISOString().split("T")[0]}     // ! to make sure user is minimum 16 years of age
              />
            </div>


            <input autoFocus
              className="input-field-primary"
              placeholder="Your Address"
              name="address"
              value={volunteerData.address}
              onChange={handleChange}
            />
            <textarea
              className="input-field-primary w-full h-44 mb-5 text-sm resize-none rounded-md p-3"
              rows="10"
              placeholder="Why You Want to Join as Volunteer?"
              name="reason"
              value={volunteerData.reason}
              onChange={handleChange}
            />

            <div className="flex items-center gap-2">
              <input autoFocus
                id="link-checkbox"
                type="checkbox"
                value=""
                name="agreed"
                className="custom-checkbox"
                checked={volunteerData.agreed}
                onChange={handleChange}
              />
              <label
                htmlFor="link-checkbox"
                className="text-bold font-medium !text-black"
              ><span className="custom-checkbox-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                <span>Agree to the terms and conditions.</span>
              </label>
            </div>
            <div className="flex items-center">
              <button className="btn-primary mx-auto" disabled={!isFormValid}>
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