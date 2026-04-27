import React from 'react'
import { youtube, facebook, instagram, linkedin, tiktok, twitter, byoutube } from '../assets'
const Socials = () => {
  return (
        <div>
            <div className='justify-start items-center gap-4 inline-flex p-2.5 shadow-lg rounded-lg my-4 px-4'>
                <p className='font-light text-[10px]'>follow us on socials</p>
                <img src={byoutube} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={tiktok} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
            </div>
        </div>
  )
}
export default Socials