import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const ShowDonation = ({ donate }) => {
  const { image, title, donatePrice, backgroundColor, category, textColor } =
    donate;
  console.log(donate);
  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
         <button className="p-2 rounded" style={{backgroundColor: backgroundColor,  color: textColor}}>{category}</button>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p style={{color:textColor}} className="mb-8 font-bold">
            ${donatePrice}.00
          </p>

        
           <NavLink to="">
           <button className="text-white p-3 rounded-xl" style={{ backgroundColor: textColor }}>
              View Details
            </button>
           </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default ShowDonation;
