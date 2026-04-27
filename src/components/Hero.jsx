import React from 'react'
import Button from './Button'
import { byoutube, facebook, instagram, linkedin, tiktok, twitter, youtube, themePoster } from '../assets'
import NavButton from '../components/Buttons/NavButton'
const Hero = () => {
  return (
    <section className='grid grid-cols-12 justify-start items-center px-24'>
    <div className='col-span-6 '>
        <div className='justify-start items-center gap-4 inline-flex p-2.5 shadow-lg rounded-lg my-4 px-4'>
          <p>follow us on socials</p>
          <img src={byoutube} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <img src={tiktok} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>

        <div>
          <h1 className='leading-[32px]'> <span className='text-6xl text-neutral-800 font-bold'> Sparking their </span>
            <div className="">
                <span className='text-6xl font-bold text-red-300 bg-gradient-to-r from-rgb(248, 172, 255) via-rgb(230, 104, 133) to-rgb(183, 53, 249)'>curiosity</span>
                <span className='text-6xl text-neutral-800 font-bold'> & creativity.</span>          
            </div>
                      
          </h1>
          <p className='text-base font-normal leading-[32px] my-4 w-[580px]'>We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.</p>
          < NavButton />
        </div>

    </div>

        <div className='col-span-6 w-[633px] h-[648]'>
            <img src={themePoster} alt="" className=' relative rounded-tr-[20px] rounded-br-[20px] ' />
        </div>
    </section>
  )
}

export default Hero
