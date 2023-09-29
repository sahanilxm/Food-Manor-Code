const RestaurantCard = ({name, imageURL, cuisines, price, rating}) =>{
    return(
        <div className=" w-1/6 border border-black m-2">
            <img src={imageURL} className=" h-56 w-full"/>
            <p>{name}</p>
            <p>{cuisines}</p>
            <p>{rating}</p>
            <p>{price}</p>
        </div>
    );
};

export default RestaurantCard;