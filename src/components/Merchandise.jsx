import React from 'react'
import { tdesignArrowRight } from '../assets'

const categories = [
  { label: 'STEM Books',      bg: 'bg-yellow-200', text: 'text-black' },
  { label: 'STEM Kits',       bg: 'bg-yellow-200', text: 'text-black' },
  { label: 'Coding Tools',    bg: 'bg-yellow-500', text: 'text-black' },
  { label: 'Robotics',        bg: 'bg-yellow-800', text: 'text-white' },
  { label: 'Science Sets',    bg: 'bg-slate-500',  text: 'text-white' },
  { label: 'Math Games',      bg: 'bg-green-900',  text: 'text-white' },
  { label: 'Art & Craft',     bg: 'bg-green-700',  text: 'text-white' },
  { label: 'Puzzle & Logic',  bg: 'bg-orange-200', text: 'text-black' },
]

export const Merchandise = () => {
  return (
    <>
      {/* Heading */}
      <div className='px-6 sm:px-12 lg:px-24 pt-6 sm:pt-8 pb-4'>
        <h1 className='font-semibold text-2xl sm:text-3xl lg:text-[42px]'>
          Merchandise Categories
        </h1>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 sm:px-12 lg:px-24 gap-4 sm:gap-5 lg:gap-[25px] pb-8'>
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`h-[92px] rounded-[18px] ${cat.bg} flex items-center justify-between px-4 cursor-pointer hover:opacity-90 transition-opacity duration-200`}
          >
            <p className={`font-medium text-sm sm:text-base ${cat.text}`}>
              {cat.label}
            </p>
            <img
              src={tdesignArrowRight}
              alt="arrow"
              className='w-5 h-5 flex-shrink-0'
            />
          </div>
        ))}
      </div>
    </>
  )
}