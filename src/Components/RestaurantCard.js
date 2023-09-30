import {RestaurantMenu} from "./index";

const RestaurantCard = ({name, imageURL, cuisines, price, rating}) =>{
    return(
        <div className="w-1/6 border border-black m-2 hover:cursor-pointer">
            <img src={imageURL} className=" h-56 w-full"/>
            <p className=" line-clamp-1">{name}</p>
            <p className=" line-clamp-1">{cuisines.join(', ')}</p>
            <p>{rating}</p>
            <p>{price}</p>
        </div>
    );
};

export default RestaurantCard;