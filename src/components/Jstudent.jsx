import React from 'react'
import Button from '../button'
import { genpics } from '../assets'
export const Jstudent = () => {
    return (
      <>
      <div className='grid grid-cols-12 bg-[#FFFAEB]'>
          <div className='word col-span-6' >
              <h1>Join our team</h1>
              <p>Join our professional network of instructors parents & guardians</p>
              <Button /> 
          </div>
          <div className="jimage col-span-6">
              <img src={genpics} alt="" />
          </div>
    </div>
    </>
  )
}
