import React from "react";
import { NavLink } from "react-router-dom";

const DonateElement = () => {
  return (
    <div className="border border-gray-300 text-gray-900 text-normal  mb-7 rounded-lg">
      <form className="m-4">
        <input
          type="text"
          className="mb-5 bg-gray-100 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
          value="Your Name"
        />
        <input
          type="text"
          className="mb-5 bg-gray-100 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
          value="Your Mail (Optional)"
        />
        <div className="w-[343px] h-[96.66px]">
          <div className="flex">
            <button className="w-1/3 ml-2 m-4 border-2 border-black flex justify-center items-center rounded-md">
              1000/-
            </button>
            <button className="w-1/3 m-4 border-2 border-black flex justify-center items-center rounded-md">
              15000/-
            </button>
            <button className="w-1/3 m-4 border-2 border-black flex justify-center items-center rounded-md">
              25000/-
            </button>
          </div>
          <input
            type="text"
            className="mb-5 bg-gray-100 border border-gray-300 text-gray-500 text-sm rounded-lg block w-[232.85px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
            value="Rs/- Enter Amount"
          />
        </div>
        <button className="text-white bg-[#EC1D1E] p-2 rounded-md mx-auto m-3 ">
          <NavLink to="/donate">Donate</NavLink>
        </button>
      </form>
      {/* Start my design */}
      <div className="container mx-auto p-4 px-0  border border-gray-300">
        <div className="grid grid-cols-3 gap-4 pb-1 ">
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-1 "> */}
          <div className="p-4 pr-0 col-span-2  text-sm">
            <h1 className="text-lg md:text-xl font-bold mb-4">Online Banking</h1>
            <p className="mb-1">Name: Maa Foundation</p>
            <p className="mb-1">Account No: 9457485678IFSC</p>
            <p className="mb-1">Code: SBIN0014321</p>
            <p className="mb-1">or</p>
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
