import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../config/app-config"; 

export const useRestaurants = (setFilteredRestaurant) =>{

    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(()=>{
        async function fetchData (){

            let response =await fetch(SWIGGY_API_URL);
            response = await response.json();
            response = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantList(response);
            setFilteredRestaurant(response);
        };

        fetchData();

    },[]);

    return [restaurantList];

};