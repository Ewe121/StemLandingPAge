import React from 'react'
import { babyHappy, cartoon, fun, ladyProfile, pattern, shapes, shoe } from '../assets'

export const CoursePortal = () => {
    return (
    <div className='px-24 grid grid-cols-3 gap-[22px] my-6'>
            <div className="card bg-white flex flex-col items-center justify-center py-5 rounded-[24px] shadow-2xl">
                <div className="pword flex items-center justify-center gap-x-[18px] w-[361.45px] pb-5">
                    <img src={ladyProfile} alt="" className='w-100% h-100% p-[7.09px]' />
                    <div className="text">
                        <h1 className='font-semibold text-[18px]'>Build mobile apps with adalo</h1>
                        <p>Let’s learn to build simple apps daily for a month (Training for kids)</p>
                    </div>
                </div>
                <div className="img pb-2">
                <img src={shoe} alt=""  className='w-[361px] h-[230px]'/>
                </div>
            </div>

            <div className="card bg-white flex flex-col items-center justify-center py-5 rounded-[24px] shadow-2xl">
                <div className="pword flex items-center justify-center gap-x-[18px] w-[361.45px] pb-5">
                    <img src={ladyProfile} alt="" className='w-100% h-100% p-[7.09px]' />
                    <div className="text">
                        <h1 className='font-semibold text-[18px]'>Build mobile apps with adalo</h1>
                        <p>Let’s learn to build simple apps daily for a month (Training for kids)</p>
                    </div>
                </div>
                <div className="img pb-2">
                <img src={fun} alt=""  className='w-[361px] h-[230px]'/>
                </div>
            </div>

            <div className="card bg-white flex flex-col items-center justify-center py-5 rounded-[24px] shadow-2xl">
                <div className="pword flex items-center justify-center gap-x-[18px] w-[361.45px] pb-5">
                    <img src={ladyProfile} alt="" className='w-100% h-100% p-[7.09px]' />
                    <div className="text">
                        <h1 className='font-semibold text-[18px]'>Build mobile apps with adalo</h1>
                        <p>Let’s learn to build simple apps daily for a month (Training for kids)</p>
                    </div>
                </div>
                <div className="img pb-2">
                <img src={cartoon} alt=""  className='w-[361px] h-[230px]'/>
                </div>
            </div>

            <div className="card bg-white flex flex-col items-center justify-center py-5 rounded-[24px] shadow-2xl">
                <div className="pword flex items-center justify-center gap-x-[18px] w-[361.45px] pb-5">
                    <img src={ladyProfile} alt="" className='w-100% h-100% p-[7.09px]' />
                    <div className="text">
                        <h1 className='font-semibold text-[18px]'>Build mobile apps with adalo</h1>
                        <p>Let’s learn to build simple apps daily for a month (Training for kids)</p>
                    </div>
                </div>
                <div className="img pb-2">
                <img src={pattern} alt=""  className='w-[361px] h-[230px]'/>
                </div>
            </div>

            <div className="card bg-white flex flex-col items-center justify-center py-5 rounded-[24px] shadow-2xl">
                <div className="pword flex items-center justify-center gap-x-[18px] w-[361.45px] pb-5">
                    <img src={ladyProfile} alt="" className='w-100% h-100% p-[7.09px]' />
                    <div className="text">
                        <h1 className='font-semibold text-[18px]'>Build mobile apps with adalo</h1>
                        <p>Let’s learn to build simple apps daily for a month (Training for kids)</p>
                    </div>
                </div>
                <div className="img pb-2">
                <img src={shapes} alt=""  className='w-[361px] h-[230px]'/>
                </div>
            </div>

            <div className="card bg-white flex flex-col items-center justify-center py-5 rounded-[24px] shadow-2xl">
                <div className="pword flex items-center justify-center gap-x-[18px] w-[361.45px] pb-5">
                    <img src={ladyProfile} alt="" className='w-100% h-100% p-[7.09px]' />
                    <div className="text">
                        <h1 className='font-semibold text-[18px]'>Build mobile apps with adalo</h1>
                        <p>Let’s learn to build simple apps daily for a month (Training for kids)</p>
                    </div>
                </div>
                <div className="img pb-2">
                <img src={babyHappy} alt=""  className='w-[361px] h-[230px]'/>
                </div>
            </div>



        
    </div>
  )
}
