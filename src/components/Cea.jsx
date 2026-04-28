import React from 'react'
import { comicM, flashCard, educationalB } from "../assets";
import PurchaseBut from "./Buttons/Purchase";

export const Cea = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-24 py-8 sm:py-12 lg:py-16">

      {/* Card 1 — Comic Magazine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center py-6 gap-6 lg:gap-[93px] bg-[#FEF7E0] rounded-2xl my-6">

        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:pl-[48px] lg:pr-0">
          <h6 className="text-2xl sm:text-3xl lg:text-[32px] font-bold max-w-full lg:w-[381px]">
            Comic Magazine teaching kids soft skills
          </h6>
          <p className="font-light text-sm sm:text-base lg:text-[16px] max-w-full lg:w-[382px] mt-3">
            We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.
          </p>
        </div>

        <div className="lg:col-span-7 flex justify-center lg:justify-end px-6 lg:px-0">
          <img src={comicM} alt="Comic Magazine" className="w-full max-w-sm sm:max-w-md lg:max-w-full object-contain" />
        </div>

      </div>

      {/* Card 2 — Educational Books (image left, text right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center py-6 gap-6 lg:gap-[93px] bg-[#EDEFFF] rounded-2xl my-6">

        <div className="lg:col-span-7 flex justify-center lg:justify-start px-6 lg:pl-[48px] lg:pr-0 order-2 lg:order-1">
          <img src={educationalB} alt="Educational Books" className="w-full max-w-sm sm:max-w-md lg:max-w-full object-contain" />
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-0 order-1 lg:order-2">
          <h6 className="text-2xl sm:text-3xl lg:text-[32px] font-bold max-w-full lg:w-[381px]">
            Educational Books Teaching Tech, Business, Economics & Skills
          </h6>
          <p className="font-light text-sm sm:text-base lg:text-[16px] max-w-full lg:w-[382px] mt-3">
            We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.
          </p>
          <div className="mt-4">
            <PurchaseBut />
          </div>
        </div>

      </div>

      {/* Card 3 — Flash Cards (text left, image right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center py-6 gap-6 lg:gap-[93px] bg-[#F6ECFF] rounded-2xl my-6">

        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:pl-[48px] lg:pr-0 order-1">
          <h6 className="text-2xl sm:text-3xl lg:text-[32px] font-bold max-w-full">
            Awesome educational flash cards with gamified learning concepts.
          </h6>
          <p className="font-light text-sm sm:text-base lg:text-[16px] max-w-full mt-3">
            We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.
          </p>
          <div className="mt-4">
            <PurchaseBut />
          </div>
        </div>

        <div className="lg:col-span-7 flex justify-center lg:justify-end px-6 lg:px-0 order-2">
          <img src={flashCard} alt="Flash Cards" className="w-full max-w-sm sm:max-w-md lg:max-w-full object-contain" />
        </div>

      </div>

    </div>
  )
}