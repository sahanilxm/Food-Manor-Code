const RestaurantCard = ({name, imageURL, cuisines, price, rating, totalRating}) =>{
    return(
        <div className="m-2 hover:cursor-pointer bg-restaurantBg rounded-md">
            <img src={imageURL} className="h-48 w-full rounded-md"/>
            <p className=" line-clamp-1 font-restaurantFont text-lg">{name}</p>
            <p className=" line-clamp-1 font-normal">{cuisines.join(', ')}</p>
            <div className="flex space-x-1.5">
                <p className="font-normal">{rating} ⭐</p>
                <p className="font-normal">•</p>
                <p className="font-normal">{totalRating} ratings</p>
            </div>
            <p className="font-normal">{price}</p>
        </div>
    );
};

export default RestaurantCard;