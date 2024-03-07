import { useLoaderData, useParams } from "react-router-dom";
import ShowDetail from "./ShowDetail";
import { useEffect, useState } from "react";




const ShowDetails = () => {
    const [Card,setCard] = useState({});
    const loadData = useLoaderData();
    console.log(loadData);
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        const checking = loadData.find(card=> card.id == id);
        console.log(checking);
        setCard(checking)
    },[id,loadData])
  
    return (
        <div>
            <ShowDetail Card={Card}></ShowDetail>
        </div>
    );
};

export default ShowDetails;