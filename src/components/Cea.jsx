import { comicM, flashCard, educationalB } from "../assets";
import PurchaseBut from "./Buttons/Purchase";

 export const Cea = () => {
     return (
         <>
         <div className="px-24 py-16 ">
              <div className="grid grid-cols-12 items-center py-6 gap-[93px] bg-[#FEF7E0] rounded-2xl my-6">
                  
                  <div className=" col-span-5 ">
                      <h6 className="text-[32px] font-bold w-[381px] pl-[48px]">Comic Magazine teaching kids soft skills</h6> 
                      <p className=" font-light  text-[16px] w-[382px] pl-[48px]">We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.</p>   
                       
                        
                 </div> 
                     
                  <div className="col-span-7">
                         <img src={comicM} alt="" />
                        
                    </div>
                
              </div>

              <div className="grid grid-cols-12 items-center py-6 bg-[#EDEFFF] rounded-2xl gap-[93px] my-6">
                  <div className="col-span-7">
                      <img src={educationalB} alt="" className="pl-[48px]"/>
                  </div>
                     
                 <div className="words col-span-5">
                      <h6 className="text-[32px] font-bold w-[381px] ">Educational Books Teaching Tech, Business, Economics & Skills</h6> 
                         <p className="font-light  text-[16px] w-[382px]">We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.</p> 
                         <PurchaseBut />
                </div> 

                  

                  
              </div>

              <div className="grid grid-cols-12 items-center py-6 bg-[#F6ECFF] rounded-2xl gap-[93px] my-6">
                  <div className="words col-span-5 pl-[48px]">
                      <h6 className="font-bold text-[32px]">Awesome educational flash cards with gamified learning concepts.</h6> 
                      <p>We prepare young minds for an innovative future by igniting imagination, fostering essential soft skills, and providing engaging hands-on learning experiences in coding, STEM, and interactive classes.</p>
                      <PurchaseBut />
                  </div> 
                  
                     <div className="col-span-7">
                      <img src= { flashCard } alt="" />
                  </div>

                        

              </div>
            </div>
        </>
      
  )
}
