import React from 'react'

function Signup() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen justify-end relative bg-cover bg-center mb-2" style={{
            backgroundImage: "url('/images/background.jpg')",
        }}>
            <div className='w-full' style={{
                background:
                    "linear-gradient(120deg, transparent 30%, white 50%)",
            }}>
                <div className='w-full'></div>
                <div className="float-right bg-white bg-opacity-100 md:bg-opacity-0 w-full md:w-1/2 z-20 flex  flex-col items-center justify-start  overflow-y-auto min-h-screen">
                    <div className="text-center max-w-md w-full mt-16 md:mt-6">
                        <h1 className="my-5 text-4xl font-semibold text-primary-base ">
                            Registration
                        </h1>
                    </div>

                    <div className="flex justify-center w-5/6  mt-6 ">
                        <input
                            placeholder="First Name"
                            className="w-1/2 mr-5 text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                        />
                        <input
                            placeholder="Last Name"
                            className="w-1/2 ml-5 text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                        />
                    </div>

                    <div className="flex w-5/6 mt-6 space-x-10 text-xl">
                        <div class="flex items-center">
                            <input id="bordered-radio-1" type="radio" value="male" name="gender" className="custom-radio absolute opacity-0 w-0 h-0" checked />
                            <label for="bordered-radio-1" class="flex items-center cursor-pointer">
                                <span class="custom-radio-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                                <span class="text-base">Male</span>
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input id="bordered-radio-2" type="radio" value="female" name="gender" className="custom-radio absolute opacity-0 w-0 h-0" />
                            <label for="bordered-radio-2" class="flex items-center cursor-pointer">
                                <span class="custom-radio-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                                <span class="text-base">Female</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-5/6 mt-6 space-y-4">
                        <input
                            placeholder="Phone Number"
                            type='tel'
                            className="w-full text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                        />
                        <input
                            placeholder="Email"
                            type='mail'
                            className="w-full text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                        />
                        <input
                            placeholder="Password"
                            type='password'
                            className="w-full text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                        />
                        <input
                            placeholder="Confirm Password"
                            type='password'
                            className="w-full text-gray-500 text-xl border border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                        />
                    </div>

                    <div className="flex flex-col w-5/6 mt-6 text-xl">
                        <div class="flex  mt-3 mb-3">
                            <input type="checkbox" id="red-checkbox" value="" 
                            // class="w-7 h-7 border-2 border-gray-700 text-gray-600 rounded-[6px] "
                            className='checkbox'
                             />
                            <label for="red-checkbox" class="ms-2 text-base text-gray-600 dark:text-gray-900">Agree to the terms and conditions</label>
                        </div>

                        <div class="flex  mt-3 mb-3">
                            <input type="checkbox" value="" 
                            // class="w-7 h-7 border-2 border-gray-700 text-gray-600 rounded-[6px] "
                            className='checkbox' />
                            <label for="Male" class="ms-2 text-base text-gray-600 dark:text-gray-900">Notify me for all updates</label>
                        </div>
                    </div>

                    <div className="mt-10 mb-6 w-full max-w-xs sm:max-w-sm flex justify-center">
                        <button className="btn-primary w-2/3 text-xl rounded-[4px]">
                            Sign Up
                        </button>
                    </div>

                    <div className="mt-4 mb-2 text-center">
                        <p className="text-gray-400 text-xl">
                            Already have an account |{" "}
                            <a className="text-xl text-primary-base" href="/login" >login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
