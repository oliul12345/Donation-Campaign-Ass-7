/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  // console.log(card);
  const {
    image,
    title,
    category,
    backgroundColor,
    textColor,
    CategoryBackgroundColor,
   
    id,
  } = card;

  return (
    <div>
      <Link to={`/card/${id}`}>
      <div className="card card-compact  bg-base-100 shadow-xl mt-10" >
        <figure>
          <img 
          className="w-full h-[200px]"
            src={image}
            alt=""
          />
        </figure>
        <div style={{ color: textColor, backgroundColor:backgroundColor }}>
        <div className=" h-[150px] p-5">
          
          <button className="p-3 rounded-lg" style={{backgroundColor:CategoryBackgroundColor}}>{category}</button>
          <h1 className="my-2 font-bold text-lg">{title}</h1>
        
         
        </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
