import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row max-h-screen min-h-[535px] h-full bg-cover bg-center relative items">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/image-login/hand.jpeg')",
        }}
      />
      <div className="w-full md:w-1/2 relative z-1">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>

      <div className="w-full md:w-1/2 bg-white bg-opacity-90 md:bg-opacity-100 z-10 flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto">
        <div className="mt-6 md:mt-8 text-center">
          <p className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold text-primary-base mb-9">
            Login
          </p>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm mt-6 space-y-11">
          <input
            autoFocus
            placeholder="Email"
            className="input-field-primary"
          />
          <input
            placeholder="Password"
            type="password"
            className="input-field-primary"
          />
        </div>

        <div className="mt-12 w-full max-w-xs sm:max-w-sm flex justify-center">
          <button className="btn-primary w-1/2 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl">
            Log In
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Create an account |{" "}
            <a className="text-primary-base font-semibold" href="/signup">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;