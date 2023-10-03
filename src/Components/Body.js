import {useState} from 'react';

import { useRestaurants } from "../hooks/useRestaurant";
import { NotFound, RestaurantCard, RestaurantShimmer} from './index';
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
        <div className='p-4 pt-24'>
            <div className="text-center">
                <input placeholder="Search a restaurant...." onChange={(e)=>setRestaurantName(e.target.value)} className='border p-1.5 rounded-l-md font-restaurantFont md:w-1/3 w-2/3'/>
                <button onClick={()=>handleRestaurants()} className='p-1.5 bg-btnBg text-white rounded-r-md hover:bg-blue-950'>Search</button>
            </div>
            
            <div className='flex flex-wrap mt-4 w-full'>
                {
                    restaurantList?.length === 0 ? <RestaurantShimmer/> : (filteredRestaurant.length==0?<NotFound/>:filteredRestaurant?.map(restaurant =><div key={restaurant?.info?.id} className='w-full min-[450px]:w-1/2 md:w-1/4 lg:w-1/6'><div><Link to={`restaurants/${restaurant?.info?.id}`} ><RestaurantCard name={restaurant?.info?.name} imageURL={IMAGE_URL+ restaurant?.info?.cloudinaryImageId} price={restaurant?.info?.costForTwo} rating={restaurant?.info?.avgRating} totalRating={restaurant?.info?.totalRatingsString} cuisines={restaurant?.info?.cuisines}/ ></Link></div></div> ))
                }   
            </div>
            
            
        </div>
    );
};

export default Body;