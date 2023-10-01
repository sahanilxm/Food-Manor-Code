import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../config/app-config"; 

export const useRestaurants = (setFilteredRestaurant) =>{

    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(()=>{
        async function fetchData (){
            let response =await fetch(SWIGGY_API_URL);
            response = await response.json();
            for(let i=0;i<response?.data?.cards.length;i++){
                if(response?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants !==undefined){
                        response = response?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                        break;
                }
            }
            setRestaurantList(response);
            setFilteredRestaurant(response);
        };

        fetchData();

    },[]);

    return [restaurantList];

};