import React from 'react'
import { tdesignArrowRight } from '../assets'
export const Merchandise = () => {
    return (
      <>
            <div className='px-24 grid justify-start pt-5'>
                <h1 className='font-semibold text-[42px]'>Merchandise Categories</h1>
            </div>

            <div className='card grid grid-cols-4 px-24  gap-[25px] '>
                <div className=' h-[92.24px] rounded-[18.45px] bg-yellow-200 flex items-center justify-between'>
                    <p className='pl-[18px] '>STEM books</p>
                    <p><img src={tdesignArrowRight} alt="" className='pr-[34.55px]'/></p>
                </div>
                <div className=' h-[92.24px] rounded-[18.45px] bg-yellow-200 flex items-center justify-between'>
                    <p className='pl-[18px] '>STEM books</p>
                    <p><img src={tdesignArrowRight} alt="" className='pr-[34.55px]'/></p>
                </div>
                <div className=' h-[92.24px] rounded-[18.45px] bg-yellow-500 flex items-center justify-between'>
                    <p className='pl-[18px] '>STEM books</p>
                    <p><img src={tdesignArrowRight} alt="" className='pr-[34.55px]'/></p>
                </div>
                <div className=' h-[92.24px] rounded-[18.45px] bg-yellow-800 flex items-center justify-between'>
                    <p className='pl-[18px] '>STEM books</p>
                    <p><img src={tdesignArrowRight} alt="" className='pr-[34.55px]'/></p>
                </div>
                <div className=' h-[92.24px] rounded-[18.45px] bg-slate-500 flex items-center justify-between'>
                    <p className='pl-[18px] '>STEM books</p>
                    <p><img src={tdesignArrowRight} alt="" className='pr-[34.55px]'/></p>
                </div>
                <div className=' h-[92.24px] rounded-[18.45px]  bg-green-900 flex items-center justify-between'>
                    <p className='pl-[18px] '>STEM books</p>
                    <p><img src={tdesignArrowRight} alt="" className='pr-[34.55px]'/></p>
                    
                </div>
                <div className=' h-[92.24px] rounded-[18.45px]  bg-green-700 flex items-center justify-between'>
                    <p className='pl-[18px] '>STEM books</p>
                    <p><img src={tdesignArrowRight} alt="" className='pr-[34.55px]'/></p>
                    
                </div>
                <div className=' h-[92.24px] rounded-[18.45px]  bg-orange-200 flex items-center justify-between'>
                    <p className='pl-[18px] '>STEM books</p>
                    <p><img src={tdesignArrowRight} alt="" className='pr-[34.55px]'/></p>
                </div>
            </div>
      </>
  )
}
