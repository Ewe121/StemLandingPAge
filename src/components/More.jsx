import React from 'react'
import { domore, bemore } from '../assets'

const cards = [
  {
    id: 1,
    tag: 'DO MORE',
    title: 'Virtual Education that makes a difference',
    img: domore,
    alt: 'Do More',
  },
  {
    id: 2,
    tag: 'BE MORE',
    title: 'We create the perfect virtual learning experience.',
    img: bemore,
    alt: 'Be More',
  },
]

export const More = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-12 lg:px-24 gap-6 sm:gap-8 lg:gap-[72px] my-6'>

      {cards.map((card) => (
        <div key={card.id} className='flex flex-col rounded-xl overflow-hidden shadow-md'>

          {/* Text block */}
          <div className='bg-black text-white flex flex-col w-full py-6 sm:py-7 px-8 sm:px-[62px] rounded-t-xl'>
            <h6 className='font-light text-sm sm:text-[16px] tracking-widest uppercase'>
              {card.tag}
            </h6>
            <p className='font-semibold text-xl sm:text-2xl lg:text-[28px] mt-2 leading-snug'>
              {card.title}
            </p>
          </div>

          {/* Image block */}
          <div className='w-full'>
            <img
              src={card.img}
              alt={card.alt}
              className='w-full h-[220px] sm:h-[260px] lg:h-auto object-cover rounded-b-xl'
            />
          </div>

        </div>
      ))}

    </div>
  )
}