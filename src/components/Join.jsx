import React from 'react'
import Button from './Button'
import { join1, join2, join3, join4, join5 } from '../assets'

export const Join = () => {
  return (
    <div className='px-6 sm:px-12 lg:px-24 py-5'>

      <div className='grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 lg:p-12 bg-black rounded-lg drop-shadow-2xl items-center gap-8 lg:gap-[50px]'>

        {/* Left — Text & CTA */}
        <div className='lg:col-span-4 text-white flex flex-col items-center lg:items-start text-center lg:text-left gap-4'>

          <h1 className='font-bold text-2xl sm:text-3xl lg:text-[32px] leading-snug'>
            Join our Students
          </h1>

          <p className='text-sm sm:text-base text-gray-300'>
            Building NEXT GEN Innovators
          </p>

          <Button label="Get Started" style="bg-white text-black" />

        </div>

        {/* Right — Images */}
        <div className='lg:col-span-8 flex flex-wrap justify-center lg:justify-end items-center gap-2 sm:gap-3'>
          <img src={join1} alt="Student 1" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto rounded-full object-cover' />
          <img src={join2} alt="Student 2" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto rounded-full object-cover' />
          <img src={join3} alt="Student 3" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto rounded-full object-cover' />
          <img src={join4} alt="Student 4" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto rounded-full object-cover' />
          <img src={join5} alt="Student 5" className='w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto rounded-full object-cover' />
        </div>

      </div>
    </div>
  )
}