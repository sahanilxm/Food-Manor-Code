import {useState} from 'react';

import { useRestaurants } from "../hooks/useRestaurant";
import { RestaurantCard} from './index';
import { IMAGE_URL } from "../config/app-config";
import { Link } from 'react-router-dom';

const Body = () =>{

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [restaurantName, setRestaurantName] = useState('');

    const [restaurantList] = useRestaurants(setFilteredRestaurant);

    const handleRestaurants = () => {
        let filteredList = restaurantList?.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(restaurantName.toLowerCase()));
        setFilteredRestaurant(filteredList);
    };


    return(
        <div>
            <div className="text-center">
                <input placeholder="Search a restaurant...." onChange={(e)=>setRestaurantName(e.target.value)} className='border border-black p-1.5'/>
                <button onClick={()=>handleRestaurants()} className='border border-black p-1.5'>Search</button>
            </div>
            
            <div className='flex flex-wrap'>
                {
                    filteredRestaurant?.length === 0 ? <p>Loading</p> : filteredRestaurant?.map(restaurant => <div className='w-1/6'><Link to={`restaurants/${restaurant?.info?.id}`} ><RestaurantCard key={restaurant?.info?.id} name={restaurant?.info?.name} imageURL={IMAGE_URL+ restaurant?.info?.cloudinaryImageId} price={restaurant?.info?.cloudinaryImageId?.costForTwo} rating={restaurant?.info?.avgRating} cuisines={restaurant?.info?.cuisines}/ ></Link></div>)
                }   
            </div>
            
            
        </div>
    );
};

export default Body;