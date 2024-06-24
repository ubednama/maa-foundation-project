import React from 'react'
import "./Signup.css"

function Signup() {
    return (
        <div className='signup'>
            <div className='container'>
                <div className='reg-image'>
                    <div className='brand-logo'><img src='../Assets/maa.png' alt='' /></div>
                </div>
                <div className='reg-form'>
                    <div className='reg-title'>Registration</div>
                    <div className='reg-detail'>
                        <form className='input-form'>
                            <div className='input-name'>
                                <input type='text' placeholder='First Name' required />
                                <input type='text' placeholder='Last Name' required />
                            </div>
                            <div className='gender'>
                                <div className='male'>
                                    <input className="checkboxes" type='checkbox' id='gender-m' required />
                                    <label for="gender-m">Male</label>
                                </div>
                                <div className='female'>
                                    <input className="checkboxes" type='checkbox' id='gender-f' required />
                                    <label for="gender-f">Female</label>
                                </div>
                            </div>
                            <div className='other-details'>
                                <input type='tel' placeholder='Phone Number' required />
                                <input type='email' placeholder='Email' required />
                                <input type='password' placeholder='Password' required />
                                <input type='password' placeholder='Confirm Password' required />
                            </div>
                            <div className='agreements'>
                                <div className='terms'>
                                    <input className="checkboxes" type='checkbox' id='agree' required />
                                    <label for="agree">Agree to the terms and conditions</label>
                                </div>
                                <div className='terms'>
                                    <input className="checkboxes" type='checkbox' id='notify' required />
                                    <label for="notify">Notify me for all updates</label>
                                </div>
                            </div>
                            <div className='signup-btn'><button>Sign Up</button></div>
                            <div className='footer'>Already have an account | <a href="">login</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
