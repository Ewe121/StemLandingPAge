import React from 'react'
import { genpics } from "../assets"

export const Joinot = () => {
  return (
    <div className='px-6 sm:px-12 lg:px-24 py-6'>

      <div className='flex flex-col lg:flex-row justify-between px-6 sm:px-10 lg:px-14 py-8 lg:py-6 items-center gap-8 lg:gap-0 bg-[#FFFAEB] rounded-2xl'>

        {/* Text & CTA */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-4'>
          <h1 className='font-semibold text-2xl sm:text-3xl lg:text-[32px]'>
            Join our team
          </h1>
          <p className='text-base sm:text-lg lg:text-[22px] font-light max-w-xs sm:max-w-sm lg:max-w-md'>
            Join our professional network of instructors, parents & guardians
          </p>
          <button className='mt-2 px-6 py-3 bg-black text-white text-sm sm:text-base font-medium rounded-full hover:bg-neutral-800 transition-colors duration-200'>
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className='flex justify-center lg:justify-end'>
          <img
            src={genpics}
            alt="Join our team"
            className='w-full max-w-xs sm:max-w-sm lg:max-w-full object-contain'
          />
        </div>

      </div>

    </div>
  )
}