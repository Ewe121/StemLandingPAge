// import React from 'react'

import Button from './Button'

import { join1, join2, join3, join4, join5 } from '../assets'


export const Join = () => {
  return (
    <div className=' drop-shadow-lg px-24 py-5'>
          
        <div className='grid grid-cols-12 p-12 bg-black  text-black-900 rounded-lg drop-shadow-2xl items-center gap-[50px]'>    
    
            <div className='col-span-4 text-white'>
                  
                  <h1 className=' font-bold text-[32px] leading-none'>Join our Students </h1>
                  
                  <p>Building NEXT GEN Innovators</p>

                  <Button label="Get Started" style="bg-black" /> {/* Use Button with different label and style */}

            </div>
      
            <div className='col-span-8 flex -x-2'>
                
            <img src={join1} alt=""  className=''/>
            <img src={join2} alt=""  className=''/>
            <img src={join3} alt=""  className=''/>
            <img src={join4} alt=""  className=''/>
            <img src={join5} alt=""  className=''/>
                  
            </div>
     
        </div>
          
    </div> 
  )
}
