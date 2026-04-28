import React from 'react'

export const Creativity = () => {
  return (
    <div className='px-6 sm:px-12 lg:px-24 py-6'>

      <div className='grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 lg:p-12 bg-white gap-6 lg:gap-[50px] text-neutral-900 rounded-lg drop-shadow-2xl items-center'>

        <h1 className='lg:col-span-5 font-bold text-2xl sm:text-3xl lg:text-[32px] leading-snug text-center lg:text-left'>
          Unleash their creativity with coding, STEM & soft skills
        </h1>

        {/* Divider — desktop only */}
        <div className='hidden lg:block lg:col-span-1' />

        <p className='lg:col-span-6 text-sm sm:text-base font-normal leading-7 text-center lg:text-left'>
          We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.
        </p>

      </div>
    </div>
  )
}