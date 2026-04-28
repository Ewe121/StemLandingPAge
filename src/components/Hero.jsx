import React from 'react'
import Button from './Button'
import { byoutube, facebook, instagram, linkedin, tiktok, twitter, youtube, themePoster } from '../assets'
import NavButton from '../components/Buttons/NavButton'

const Hero = () => {
  return (
    <section className='grid grid-cols-12 justify-start items-center px-6 sm:px-12 lg:px-24 py-8 lg:py-0'>

      {/* Left Column */}
      <div className='col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left'>

        {/* Social Bar */}
       <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-4 p-2.5 shadow-lg rounded-lg my-4 px-3 sm:px-4 overflow-x-auto">
  <p className="text-sm sm:text-base whitespace-nowrap">
    follow us on socials
  </p>

  <div className="flex items-center gap-2 sm:gap-4 flex-nowrap">
    <img src={byoutube} alt="BYoutube" className="w-5 h-5 flex-shrink-0" />
    <img src={facebook} alt="Facebook" className="w-5 h-5 flex-shrink-0" />
    <img src={instagram} alt="Instagram" className="w-5 h-5 flex-shrink-0" />
    <img src={linkedin} alt="LinkedIn" className="w-5 h-5 flex-shrink-0" />
    <img src={tiktok} alt="TikTok" className="w-5 h-5 flex-shrink-0" />
    <img src={twitter} alt="Twitter" className="w-5 h-5 flex-shrink-0" />
    <img src={youtube} alt="YouTube" className="w-5 h-5 flex-shrink-0" />
  </div>
</div>

        {/* Heading & Body */}
        <div>
          <h1 className='leading-tight'>
            <span className='text-4xl sm:text-5xl lg:text-6xl text-neutral-800 font-bold'>
              Sparking their{' '}
            </span>
            <div>
              <span className='text-4xl sm:text-5xl lg:text-6xl font-bold text-red-300 bg-gradient-to-r from-[#F8ACFF] via-[#E66885] to-[#B735F9] bg-clip-text text-transparent'>
                curiosity
              </span>
              <span className='text-4xl sm:text-5xl lg:text-6xl text-neutral-800 font-bold'>
                {' '}& creativity.
              </span>
            </div>
          </h1>

          <p className='text-sm sm:text-base font-normal leading-7 sm:leading-8 my-4 max-w-full sm:max-w-[580px]'>
            We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.
          </p>

          <NavButton />
        </div>
      </div>

      {/* Right Column — Image */}
      <div className='col-span-12 lg:col-span-6 mt-8 lg:mt-0 w-full flex justify-center lg:justify-end'>
        <img
          src={themePoster}
          alt="Theme Poster"
          className='w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[633px] rounded-tr-[20px] rounded-br-[20px] object-cover'
        />
      </div>

    </section>
  )
}

export default Hero