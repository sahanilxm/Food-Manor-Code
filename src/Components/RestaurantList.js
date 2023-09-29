const RestaurantList = ({name, imageURL, cuisines, price, rating}) =>{
    return(
        <div>
            <img src={imageURL}/>
            <p>{name}</p>
            <p>{cuisines}</p>
            <p>{rating}</p>
            <p>{price}</p>
        </div>
    );
};

export default RestaurantList;