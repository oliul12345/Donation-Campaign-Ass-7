import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Cards = () => {
    const loadCard = useLoaderData();
    // console.log(loadCard)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                loadCard.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;




