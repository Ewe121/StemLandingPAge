import React from 'react'
import { DeepDive } from '../constants/index';

export const DeepDiveCard = () => {

  const getBackgroundColor = (id) => {
    switch (id) {
      case "DeepDive-1": return "#FF564C";
      case "DeepDive-2": return "#E8F0FE";
      case "DeepDive-3": return "#F1F1F1";
      case "DeepDive-4": return "#7021D5";
      case "DeepDive-5": return "#1A73E8";
      case "DeepDive-6": return "#E8F0FE";
      default:           return "#ffffff";
    }
  };

  const getTextColor = (id) => {
    switch (id) {
      case "DeepDive-1":
      case "DeepDive-3":
      case "DeepDive-5": return "black";
      case "DeepDive-2":
      case "DeepDive-4":
      case "DeepDive-6": return "black";
      default:           return "black";
    }
  };

  return (
    <>
      {/* Heading */}
      <div className='flex justify-center items-center px-6 sm:px-12 lg:px-24 py-6 sm:py-8 text-center'>
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-[32px]'>
          Deep Dive into real world concepts
        </h1>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-12 lg:px-24 gap-6 sm:gap-8 lg:gap-12 pb-12'>
        {DeepDive.map(item => (
          <div
            key={item.id}
            style={{ backgroundColor: getBackgroundColor(item.id) }}
            className='rounded-2xl overflow-hidden flex flex-col'
          >
            <p
              className='font-bold text-2xl sm:text-3xl lg:text-[38px] p-5 leading-snug'
              style={{ color: getTextColor(item.id) }}  
            >
              {item.title}
            </p>
            <img
              src={item.img}
              alt={item.title}
              className='p-5 w-full object-contain mt-auto'
            />
          </div>
        ))}
      </div>
    </>
  );
};