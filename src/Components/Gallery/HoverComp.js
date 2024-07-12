import React from 'react'

const Hcomp = ({heading,text}) => {
  return (
    <div className='flex flex-col gap-8 h-full px-5 justify-center items-center hover:opacity-70 opacity-0 bg-black z-10 rounded-md'>
      <h1 className=' text-[2.5vw] font-bold text-[#F5F5F5]'>{heading}</h1> 
      <p className=' text-center text-[1.2vw] w-4/5 font-regular text-[#F0F0F0]'>{text}</p>
    </div>
  )
}

export default Hcomp;