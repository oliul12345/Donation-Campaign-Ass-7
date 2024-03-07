import { useState } from "react";
import { useLoaderData } from "react-router-dom";




const Banner = () => {

    const load = useLoaderData();
   
  const [search,setSearch] = useState(load);
  const [searchTwo,setSearchTwo] = useState(load);
  // console.log(search)

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    const searchInput = document.getElementById('input').value;
    console.log(searchInput)
    if(searchInput.length){
      const filterData = search?.filter(name=> name.category === searchInput)
      console.log(filterData)
      if(searchInput){
        setSearchTwo(filterData)
      }
      else{
        setSearchTwo(search)
      }
    }
  
    

      // const searchValue = e.target.search.value
      // console.log(searchValue);
    

    //   const filterData = e?.filter(name=> name.category === searchValue)
    

    //   console.log(filterData);

    }

  const divStyle = {
    backgroundImage: `url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0NF3dPGVPgDT4boMbOo7AFzYYZ8X32XaAgrEUuJ9kL-bMemCuspoYE-Jg')`,
    backgroundSize: "cover", // You can adjust these properties as needed
    backgroundRepeat: "no-repeat",
    height: "400px",
    opacity: 0.1,
  };
  return (
    <div className="relative">
      <div>
        <div style={divStyle}>
          <img alt="" />
        </div>
        <div className="text-center absolute bottom-36 left-3 md:left-32 lg:left-[380px]">
          <h1 className="text-3xl md:text-4xl lg:5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h1>
          
            <input 
             
              required
              className="w-[70vh] mx-auto py-3 px-4 shadow-xl"
              type="search"
              name="search"
              placeholder="search here ..."
              id="input"
            />
             <button 
              onClick={handleSubmit}
             className="bg-red-500 p-3 rounded-r-xl text-white">
              Search
            </button>
      
        </div>
      </div>
    </div>
  );
};

export default Banner;
