const RestaurantCard = ({name, imageURL, cuisines, price, rating, totalRating}) =>{
    return(
        <div className=" m-2 hover:cursor-pointer p-1.5">
            <img src={imageURL} className="h-48 w-full rounded-md"/>
            <p className=" line-clamp-1">{name}</p>
            <p className=" line-clamp-1">{cuisines.join(', ')}</p>
            <div className="flex space-x-1.5">
                <p>{rating} ⭐</p>
                <p>•</p>
                <p>{totalRating} ratings</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default RestaurantCard;