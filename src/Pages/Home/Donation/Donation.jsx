import { useEffect, useState } from "react";
import ShowDonation from "./ShowDonation";


const Donation = () => {
    const [donation,setDonation] = useState([]);
    const [noFound,setNoFound] = useState("");
    const [isShow,setIsShow] = useState(false)
    console.log(donation)
    console.log(isShow)
    useEffect(()=>{
         const donationCategory = JSON.parse(localStorage.getItem('social-donate'))
        if(donationCategory){
            setDonation(donationCategory);
        }
        else{
            setNoFound("No Donate Yet")
        }
        
    },[])

    return (
        <div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                isShow ? donation.map(donate=><ShowDonation donate={donate} key={donate.id}></ShowDonation>) 
                :
                donation.slice(0,4).map(donate=><ShowDonation donate={donate} key={donate.id}></ShowDonation>)
                
            }
            </div>
            <div className="flex justify-center my-6">
                {
                    donation.length > 4 &&  <button onClick={()=>setIsShow(!isShow)} className="p-3 rounded-lg bg-blue-700 text-white">See all</button>
                }
           
            </div>
        </div>
    );
};

export default Donation;