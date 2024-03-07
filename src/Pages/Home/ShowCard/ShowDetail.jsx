/* eslint-disable react/prop-types */
import swal from 'sweetalert'
const ShowDetail = ({ Card }) => {
  console.log(Card)
  const { image, title, description, donatePrice,CategoryBackgroundColor,id } = Card;

    const handleDonate =() =>{
        console.log(Card)
        const addToDonation = [];
        const donationCategory = JSON.parse(localStorage.getItem('social-donate'))

        if(!donationCategory){
            addToDonation.push(Card);
            localStorage.setItem('social-donate',JSON.stringify(addToDonation));
            
            swal("Allah bless You!", "You donate helpless people!", "success");
        }
      else{
        const isExists = donationCategory.find(donate=> donate.id == id )
        if(!isExists){
            addToDonation.push(...donationCategory,Card);
            localStorage.setItem('social-donate',JSON.stringify(addToDonation));
            swal("Allah bless You!", "You donate helpless people!", "success");
        }
        else{
          swal("Good job!", "do not duplicate!", "error");
          
        }
        
      }
    }

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="relative">
          <img className="w-full h-[70vh] bg-blend-overlay"
            src={image}
            alt=""
          />
          <div className='absolute bottom-0 w-full h-[30%] bg-black opacity-75'>

          </div>
          <div className="absolute bottom-9 left-10">
            <button onClick={handleDonate} style={{backgroundColor: CategoryBackgroundColor}} className="bg-red-500 text-white p-3 rounded-lg">Donate ${donatePrice}</button>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
