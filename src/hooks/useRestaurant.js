import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../config/app-config"; 

export const useRestaurants = (setFilteredRestaurant) =>{

    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(()=>{
        async function fetchData (){
            let response =await fetch(SWIGGY_API_URL);
            response = await response.json();

            let restaurantSet = new Set();

            for(let i=0;i<response?.data?.cards?.length;i++){
                if(response?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined){
                        for(let j=0;j<response?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants.length;j++){
                            restaurantSet.add(response?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants[j]);
                            if(restaurantSet.size >= 30){
                                break;
                            }
                        }
                        if(restaurantSet.size >= 30){
                            break;
                        }
                }
            }
            setRestaurantList(Array.from(restaurantSet));
            setFilteredRestaurant(Array.from(restaurantSet));
        };

        fetchData();

    },[]);

    return [restaurantList];

};