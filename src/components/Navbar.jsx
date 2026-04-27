import React from 'react';

import Button from './Button'

import { logo } from '../assets'

import NavButton from '../components/Buttons/NavButton'

const Navbarli = () => {

  const links = [];

  return (
    <nav className='w-full h-[60px] bg-white-400 shadow-lg flex justify-between items-center px-[100px]'>
        
        <div className=""> 
             
          <img src={logo} alt="hoobank" className="w-[193px] h-[45px]" />  
            
        </div>
          
      <ul className=' flex justify-end font-medium text-[16px] items-center gap-[24px] leading-[24px] '>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Platforms</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Scholarships</a></li>
        <li><a href="#">shop</a></li>
        <li><a href="#">Faq</a></li>
        
        <NavButton />
      </ul>
          
    </nav>
  )
}

export default Navbarli