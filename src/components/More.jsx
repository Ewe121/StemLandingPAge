import React from 'react'
import { domore, bemore } from '../assets'
export const More = () => {
    return (
        <>
    <div className='grid grid-cols-2 px-24 justify-between gap-[72px] ' >

            
        <div className='col-span-1 rounded-xl'>
          <div className="moretext bg-black text-white flex flex-col w-[588.34px] py-7 rounded-xl">
              <h6 className='px-[62px] font-light text-[16px]'>DO MORE</h6>
              <p className='font-semibold text-[28px] px-[62px]'>Virtual Education that makes a difference</p>
          </div>
          <div className="moreimg rounded-xl">
                <img src={domore} alt=""  className='rounded-xl'/>
          </div>
        </div>
      
        <div className='col-span-1'>
          <div className="moretext  bg-black text-white flex flex-col w-[588.34px] py-7 rounded-xl">
              <h6 className='px-[62px] font-light text-[16px]'>DO MORE</h6>
              <p className='font-semibold text-[28px] px-[62px]'>We create the perfect virtual learning experience.</p>
          </div>
          <div className="moreimg rounded-xl">
                <img src={bemore} alt="" className='rounded-xl'/>
          </div>
        </div>
                
     </div>   
      </>
  )
}

