import {useState} from 'react';

import { useRestaurants } from "../hooks/useRestaurant";
import { RestaurantCard} from './index';
import { IMAGE_URL } from "../config/app-config";

const Body = () =>{

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [restaurantName, setRestaurantName] = useState('');

    const [restaurantList] = useRestaurants(setFilteredRestaurant);

    const handleRestaurants = () => {
        let filteredList = restaurantList?.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(restaurantName.toLowerCase()));
        setFilteredRestaurant(filteredList);
    };


    return(
        <div className="min-h-screen">
            <div className="text-center">
                <input placeholder="Search a restaurant...." onChange={(e)=>setRestaurantName(e.target.value)}/>
                <button onClick={()=>handleRestaurants()}>Search</button>
            </div>
            <div className="flex flex-wrap justify-around">
                {
                    filteredRestaurant?.length === 0 ? <p>Loading</p> : filteredRestaurant?.map(restaurant => <RestaurantCard key={restaurant?.info?.id} name={restaurant?.info?.name} imageURL={IMAGE_URL+ restaurant?.info?.cloudinaryImageId} price={restaurant?.info?.cloudinaryImageId?.costForTwo} rating={restaurant?.info?.avgRating} cuisines={restaurant?.info?.cuisines}/>)
                    
                }
            </div>
        </div>
    );
};

export default Body;