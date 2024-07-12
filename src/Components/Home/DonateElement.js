import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import validator from "validator";

const DonateElement = () => {
  const [donationData, setDonationData] = useState({
    name: "",
    email: "",
    donationAmount: "1000" // Default amount selected
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
    if (donationData.email.trim() !== "" && validator.isEmail(donationData.email)) {
      console.log("Donation Data:", donationData);
      // Redirect to payment or handle the logic here
    } else {
      console.log("Invalid email:", donationData.email);
    }
  };

  return (
    <div className="border border-gray-300 text-gray-900 text-normal mb-7 rounded-lg">
      <form className="m-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={donationData.name}
          onChange={handleChange}
          className="mb-4 input-field-primary text-sm w-full"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={donationData.email}
          onChange={handleChange}
          className="mb-4 input-field-primary text-sm w-full"
          placeholder="Your Mail (Optional)"
        />
        <div className="mb-4">
          <div className="flex mb-4 gap-8">
            {["1000", "1500", "2500"].map((amount) => (
              <button
                key={amount}
                className={`btn-primary !bg-white !text-black !border-2 !border-[#000] !rounded-md font-bold relative py-1`}
                type="button"
                onClick={() => handleButtonClick(amount)}
              >
                {amount}/-
                {donationData.donationAmount === amount && (
                  <span className="absolute -top-2 -right-2 bg-green-500 rounded-full size-5 flex items-center justify-center">
                    <span className="text-white text-sm">{'\u2713'}</span>
                  </span>
                )}
              </button>
            ))}
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
          <button className="btn-primary mx-auto">Donate</button>
        </NavLink>
      </form>
      <div className="container mx-auto pt-4 px-0 border-t border-gray-300">
        <div className="grid grid-cols-3 gap-4 pb-1">
          <div className="p-4 pr-0 col-span-2 text-sm">
            <h1 className="text-lg md:text-xl font-bold mb-4 text-[#0A0A0A]">Online Banking</h1>
            <p className="mb-1 text-[#2E2E2E]">Name: Maa Foundation</p>
            <p className="mb-1 text-[#2E2E2E]">Account No: 9457485678</p>
            <p className="mb-1 text-[#2E2E2E]">IFSC Code: SBIN0014321</p>
            <p className="mr-40 text-[#2E2E2E] font-bold text-center">OR</p>
            <p className="mb-1 text-[#2E2E2E]">maafoundation@upi</p>
          </div>
          <div className="p-4 flex flex-col items-center border-l col-span-1">
            <img src="./assets/bar.png" alt="Placeholder" className="mb-4" />
            <p className="text-center text-sm">Scan to donate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateElement;