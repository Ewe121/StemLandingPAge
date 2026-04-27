import React from 'react'

export const Amazing = () => {
  return (
    <div className='bg-black px-4 md:px-12 lg:px-24 mx-4 md:mx-12 lg:mx-24 py-8 md:py-12 my-6 rounded-2xl'>
      
      {/* Heading */}
      <div className='text-center'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
          Join Other
        </h1>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
          amazing students
        </h1>
      </div>

      {/* Content */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        
        <div className="text-white text-sm md:text-base px-2 md:px-4 space-y-4">
          <p>
            Get ready for an exciting exploration of the real world! Dive deep into fascinating concepts and explore their implications. Discover new insights and gain a deeper understanding of the world around you.
          </p>
          <p>
            Enjoy a fun and enlightening journey into the depths of the unknown!
          </p>
          <p>
            In their weekly classes, students play interactive games to explore real world concepts that are often not taught in the regular school system.
          </p>
        </div>

        <div className="text-white text-sm md:text-base px-2 md:px-4 space-y-4">
          <p>
            Get ready for an exciting exploration of the real world! Dive deep into fascinating concepts and explore their implications. Discover new insights and gain a deeper understanding of the world around you.
          </p>
          <p>
            Enjoy a fun and enlightening journey into the depths of the unknown!
          </p>
          <p>
            In their weekly classes, students play interactive games to explore real world concepts that are often not taught in the regular school system.
          </p>
        </div>

      </div>
    </div>
  )
}