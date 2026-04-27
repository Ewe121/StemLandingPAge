import React from 'react'
import { useState } from 'react'
import  Brands from './Brands'
import Socials from './Socials'
export const Footer = () => {
  return (
      <div className='grid grid-cols-3 px-24 items-center justify-center'>
          <div className="firstF">
              <Brands />
              <Socials />
          </div>
        <div className='genst grid grid-cols-2'>
            <div className="secondF">
              <h1 className='font-bold'>Company</h1>
              <p>About</p>
              <p>Contact Us</p>
              <p>FAQ</p>
              <p>Platforms</p>
            </div>

            <div className="thirdF">
              <h1 className='font-bold'>Products</h1>
              <p>Learning Hub</p>
              <p>Shop</p>
            </div>
          </div>
          <div className="fourF">
              <h1 className='font-bold'>Newsletter</h1>
              <div>
                <div className="Form w-[336px] h-[43px] relative rounded-lg border border-stone-900">
                <div className="Frame74 left-[17px] top-[10.75px] absolute justify-between items-center inline-flex ">
                    <div className="Input pr-[100.42px] justify-start items-start flex">
                        <div className="EnterYourEmail text-stone-900 text-sm font-normal font-['Inter']">Enter your email</div>
                    </div>
                <div className="ButtonSubscribe text-stone-900 text-[13px] font-medium font-['Work Sans'] leading-tight">Subscribe</div>
                </div>
                </div>
              </div>
              <p>Get a summary of what we have shipped, behind
                  the scenes updates, and team picks. Unsubscribe
                  at any time.
              </p>
          </div>
          
      </div>
      
  )
}

