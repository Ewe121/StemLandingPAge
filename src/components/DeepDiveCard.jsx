import { stem, application, soft, programming, creative, game } from '../assets';
import { DeepDive } from '../constants/index'; // Importing DeepDive array from constants/index.js


export const DeepDiveCard = () => {
    const getBackgroundColor = (id) => {
        switch(id) {
            case "DeepDive-1":
                return "#FF564C"; // Deep1 color
              case "DeepDive-2":
                return "#E8F0FE"; // Deep2 color
              case "DeepDive-3":
                return "#F1F1F1"; // Deep3 color
              case "DeepDive-4":
                return "#7021D5"; // Deep4 color
              case "DeepDive-5":
                return "#1A73E8"; // Deep5 color
              case "DeepDive-6":
                return "#E8F0FE"; // Deep6 color
              default:
                return "white"; // Default color
        }
    };
    const getTextColor = (id) => {
        switch (id) {
            case "DeepDive-1":
            case "DeepDive-3":
            case "DeepDive-5":
                return "black";
            case "DeepDive-2":
            case "DeepDive-4":
            case "DeepDive-6":
                return "white";
            default:
                    return "yellow";
                }
    }

    return (
        <>  
            <div className='flex justify-center items-center '>
                <h1 className='font-bold text-[32px]'>Deep Dive into real world concepts</h1>
            </div>
      <div className='grid grid-cols-2 px-24 gap-12 '>
        {DeepDive.map(item => (
          <div key={item.id}  style={{ backgroundColor: getBackgroundColor(item.id)}} className='rounded-2xl'>
            <p className='font-bold text-[38px] grid grid-cols-2  p-5 leading-snug' style={{color: getTextColor}}>{item.title}</p>
            <img src={item.img} alt={item.title} className='p-5'/>
          </div>
        ))}
            </div>
         </>
    );
  };
