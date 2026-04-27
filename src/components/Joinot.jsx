import React from 'react'
import { genpics } from "../assets"

export const Joinot = () => {
    return (
        <>
            
        <div className='px-24 '>
                
            <div className=' flex flex-row justify-between px-14  py-6 items-center bg-[#FFFAEB] rounded-2xl '>
                <div className=''>
                    <h1 className='font-semibold text-[32px] '>Join our team</h1>
                    <p className='text-[22px] font-light grid grid-cols-2'>Join our professional network of instructors, parents & guardians</p>
                    <button />
                </div>

                <div className=''>
                    <img src={genpics} alt="" />
                </div>
            </div>
            
        </div>
        </>
    )
}
