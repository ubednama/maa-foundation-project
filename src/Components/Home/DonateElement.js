import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import validator from "validator";

const DonateElement = () => {
  const [donationData, setDonationData] = useState({
    name: "",
    email: "",
    donationAmount: ""
  });

  const handleButtonClick = (amount) => {
    setDonationData((prevData) => ({
      ...prevData,
      donationAmount: amount
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // ToDo: add submit logic
    if (donationData.email.trim() !== "" && validator.isEmail(donationData.email)) {} //ToDo: only move email when this satisfied
    else {} //don't submit email
    console.log("Donation Data:", donationData);
  };

  return (
    <div className="border border-gray-300 text-gray-900 text-normal mb-7 rounded-lg">
      <form className="m-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="mb-4 input-field-primary text-sm w-full"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="mb-4 input-field-primary text-sm w-full"
          placeholder="Your Mail (Optional)"
        />
        <div className=" mb-4">
          <div className="flex mb-4">
            <button className="btn-primary !bg-white !text-black mr-4 !border-2 !border-[#000] !rounded-md font-bold"
              type="button"
              onClick={() => handleButtonClick("1000")}>
              1000/-
            </button>
            <button className="btn-primary !bg-white !text-black ml-2 mx-4 !border-2 !border-[#000] !rounded-md font-bold"
              type="button"
              onClick={() => handleButtonClick("1500")}>
              1500/-
            </button>
            <button className="btn-primary !bg-white !text-black ml-2 mx-4 !border-2 !border-[#000] !rounded-md font-bold"
              type="button"
              onClick={() => handleButtonClick("2500")}>
              2500/-
            </button>
          </div>
          <input 
            type="number"
            name="donationAmount"
            value={donationData.donationAmount}
            onChange={handleChange}
            className="input-field-primary text-sm !w-1/2"
            placeholder="Rs/- Enter Amount"
          />
        </div>

        <NavLink to="/payment">
        <button className="btn-primary mx-auto m-3">Donate</button></NavLink>
        
      </form>
      {/* Start my design */}
      <div className="container mx-auto pt-4 px-0  border-t border-gray-300">
        <div className="grid grid-cols-3 gap-4 pb-1 ">
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-1 "> */}
          <div className="p-4 pr-0 col-span-2 text-sm">
            <h1 className="text-lg md:text-xl font-bold mb-4">Online Banking</h1>
            <p className="mb-1">Name: Maa Foundation</p>
            <p className="mb-1">Account No: 9457485678IFSC</p>
            <p className="mb-1">Code: SBIN0014321</p>
            <div className="flex items-center mb-1">
              <p className="mr-1 font-bold">OR</p>
            </div>
            <p className="mb-1">maafoundation@upi</p>
          </div>
          <div className="p-4 flex flex-col items-center border-l col-span-1">
            {/* <img src="./assets/bar.png" alt="Placeholder" className="w-full mb-4 h-auto md:w-3/4 lg:w-2/3 " /> */}
            <img src="./assets/bar.png" alt="Placeholder" className="mb-4 " />
            <p className="text-center text-sm">Scan to donate</p>
          </div>
        </div>
      </div>

      {/* end my design  */}
    </div>
  );
};

export default DonateElement;