import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-cover bg-center relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/image-login/hand.jpeg')",
        }}
      />
      <div className="w-full md:w-1/2 relative z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>

      <div className="w-full md:w-1/2 bg-white bg-opacity-90 md:bg-opacity-100 z-20 flex flex-col items-center justify-start p-4 md:p-8 overflow-y-auto min-h-screen">
        <div className="text-center max-w-md w-full mt-16 md:mt-0">
          <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-base">
            MAA FOUNDATION
          </h1>
          <p className="font-work-sans text-xs sm:text-sm md:text-base text-[#160202] mt-2 md:mt-4">
            Children are our greatest treasures, and it is our duty to nurture
            them with love and care.
          </p>
        </div>
        
        <div className="mt-6 md:mt-8 text-center">
          <p className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold text-primary-base">
            Login
          </p>
        </div>
        
        <div className="w-full max-w-xs sm:max-w-sm mt-6 space-y-4">
          <input
            placeholder="Email"
            className="input-field-primary"
          />
          <input
            placeholder="Password"
            type="password"
            className="input-field-primary"
          />
        </div>
        
        <div className="mt-6 w-full max-w-xs sm:max-w-sm flex justify-center">
          <button className="btn-primary w-1/2 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl">
            Log In
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Create an account |{" "}
            <a className="text-primary-base font-semibold" href="/signup" >Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
