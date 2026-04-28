import React from 'react'
import { babyHappy, cartoon, fun, ladyProfile, pattern, shapes, shoe } from '../assets'

const courses = [
  { id: 1, img: shoe,      title: 'Build mobile apps with Adalo',       desc: "Let's learn to build simple apps daily for a month (Training for kids)" },
  { id: 2, img: fun,       title: 'Introduction to STEM concepts',       desc: "Let's learn to build simple apps daily for a month (Training for kids)" },
  { id: 3, img: cartoon,   title: 'Creative coding for beginners',       desc: "Let's learn to build simple apps daily for a month (Training for kids)" },
  { id: 4, img: pattern,   title: 'Design thinking & problem solving',   desc: "Let's learn to build simple apps daily for a month (Training for kids)" },
  { id: 5, img: shapes,    title: 'Math & logic through play',           desc: "Let's learn to build simple apps daily for a month (Training for kids)" },
  { id: 6, img: babyHappy, title: 'Soft skills for young innovators',    desc: "Let's learn to build simple apps daily for a month (Training for kids)" },
]

export const CoursePortal = () => {
  return (
    <div className='px-6 sm:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-[22px] my-6'>

      {courses.map((course) => (
        <div
          key={course.id}
          className='bg-white flex flex-col items-center justify-center py-5 rounded-[24px] shadow-2xl hover:shadow-xl transition-shadow duration-300'
        >
          {/* Header — avatar + text */}
          <div className='flex items-center gap-x-[18px] w-full px-4 sm:px-5 pb-5'>
            <img
              src={ladyProfile}
              alt="Instructor"
              className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0 p-[2px]'
            />
            <div>
              <h1 className='font-semibold text-sm sm:text-[16px] lg:text-[18px] leading-snug'>
                {course.title}
              </h1>
              <p className='text-xs sm:text-sm text-gray-500 mt-1'>
                {course.desc}
              </p>
            </div>
          </div>

          {/* Course image */}
          <div className='w-full px-4 sm:px-5'>
            <img
              src={course.img}
              alt={course.title}
              className='w-full h-[180px] sm:h-[200px] lg:h-[230px] rounded-xl object-cover'
            />
          </div>

        </div>
      ))}

    </div>
  )
}