import React from 'react';
import "./Signup.css"

function Signup() {
    return (
        // <div className='signup'>
        //     <div className='container-signup'>
        //         <div className='reg-image'>
        //         {/* <div className='reg-image'>
        //             <div className='brand-logo'><img src='../Assets/maa.png' alt='' /></div>
        //         </div> */}
        //         <div className='reg-form'>
        //             <div className='reg-title'>Registration</div>
        //             <div className='reg-detail'>
        //                 <form className='input-form'>
        //                     <div className='input-name'>
        //                         <input className='input-field-primary' type='text' placeholder='First Name' required />
        //                         <input className='input-field-primary' type='text' placeholder='Last Name' required />
        //                     </div>
        //                     <div className='gender'>
        //                         <div className='male'>
        //                             <input className="checkboxes border rounded-md  border-gray-700" type='checkbox' id='gender-m' required />
        //                             <label for="gender-m">Male</label>
        //                         </div>
        //                         <div className='female'>
        //                             <input className="checkboxes border rounded-md border-gray-700" type='checkbox' id='gender-f' required />
        //                             <label for="gender-f">Female</label>
        //                         </div>
        //                     </div>
        //                     <div className='other-details'>
        //                         <input className='input-field-primary' type='tel' placeholder='Phone Number' required />
        //                         <input className='input-field-primary' type='email' placeholder='Email' required />
        //                         <input className='input-field-primary' type='password' placeholder='Password' required />
        //                         <input className='input-field-primary' type='password' placeholder='Confirm Password' required />
        //                     </div>
        //                     <div className='agreements'>
        //                         <div className='terms'>
        //                             <input className="checkboxes border rounded-md border-gray-700" type='checkbox' id='agree' required />
        //                             <label for="agree">Agree to the terms and conditions</label>
        //                         </div>
        //                         <div className='terms'>
        //                             <input className="checkboxes border rounded-md border-gray-700" type='checkbox' id='notify' required />
        //                             <label for="notify">Notify me for all updates</label>
        //                         </div>
        //                     </div>
        //                     <div className='signup-btn'><button>Sign Up</button></div>
        //                     <div className='footer-signup'>Already have an account | <a href="">login</a></div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
         <div className="flex flex-col md:flex-row min-h-screen bg-cover bg-center relative">
            <div
                className="absolute inset-0 z-0 bg-contain bg-no-repeat"
                style={{
                    backgroundImage: "url('/Images/bg2.jpg')",
                }}
            />
            <div className="w-full md:w-1/2 relative z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(120deg, transparent 45%, white 80%)",
                    }}
                />
            </div>

            <div className="w-full md:w-1/2 bg-white bg-opacity-90 md:bg-opacity-100 z-20 flex flex-col items-center justify-start  overflow-y-auto min-h-screen ">
                <div className="text-center max-w-md w-full mt-16 md:mt-6">
                    <h1 className="my-5 font-sans text-5xl font-semibold text-primary-base ">
                        Registration
                    </h1>
                </div>

                <div className="flex justify-center w-full  mt-6 space-x-8">
                    <input
                        placeholder="First Name"
                        className="w-72  text-gray-500 text-40 border-2 border-gray-700 rounded-[4px] px-7"
                    />
                    <input
                        placeholder="Last Name"
                        className="w-72  text-gray-500 text-20 border-2 border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                    />
                </div>

                <div className="flex flex-col items-center w-full mt-6 space-y-4">
                    <input
                        placeholder="First Name"
                        className="w-4/5 max-w- text-gray-500 text-20 border-2 border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                    />
                    <input
                        placeholder="First Name"
                        className="w-4/5 text-gray-500 text-20 border-2 border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                    />
                    <input
                        placeholder="First Name"
                        className="w-4/5 text-gray-500 text-20 border-2 border-gray-700 rounded-[4px] px-2 lg:px-4 py-2 lg:py-3"
                    />
                    
                </div>

                <div className="mt-6 w-full max-w-xs sm:max-w-sm flex justify-center">
                    <button className="btn-primary w-2/3 text-base sm:text-lg md:text-xl rounded-[4px]">
                        Sign Up
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                        Already have an account |{" "}
                        <a className="text-primary-base font-semibold" href="/signup" >login</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
