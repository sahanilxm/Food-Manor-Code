import {useState} from 'react';

import { useRestaurants } from "../hooks/useRestaurant";
import { RestaurantCard, RestaurantShimmer} from './index';
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
            
            <div className='flex flex-wrap mt-4'>
                {/* <RestaurantShimmer/> */}
                {
                    filteredRestaurant?.length === 0 ? <RestaurantShimmer/> : filteredRestaurant?.map(restaurant => <div className='w-1/6'><Link to={`restaurants/${restaurant?.info?.id}`} ><RestaurantCard key={restaurant?.info?.id} name={restaurant?.info?.name} imageURL={IMAGE_URL+ restaurant?.info?.cloudinaryImageId} price={restaurant?.info?.costForTwo} rating={restaurant?.info?.avgRating} totalRating={restaurant?.info?.totalRatingsString} cuisines={restaurant?.info?.cuisines}/ ></Link></div>)
                }   
            </div>
            
            
        </div>
    );
};

export default Body;