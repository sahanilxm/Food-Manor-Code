import { useEffect, useState } from "react";

import { RESTAURANT_MENU_API_URL } from "../config/app-config";

export const useRestaurantMenu = (params, setFilteredRestaurantMenu) => {

    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [restaurantDetail, setRestaurantDetail] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
            let response = await fetch (RESTAURANT_MENU_API_URL+params);
            response = await response.json();
            setRestaurantDetail(response?.data?.cards[0]?.card?.card?.info);
            // setRestaurantMenu(response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

            var newSet = new Set();
            for(let i=0;i<response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length;i++){
                if(response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.itemCards !== undefined){
                    for(let j=0;j<response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.itemCards.length;j++){
                        newSet.add(response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.itemCards[j]);
                        if(newSet.size >= 30){
                            break;
                        }
                    }
                    if(newSet.size >= 30){
                        break;
                    }
                }
            }
            setFilteredRestaurantMenu(Array.from(newSet));
            setRestaurantMenu(Array.from(newSet));
        };
        fetchData();
    }, []);

    return [restaurantDetail, restaurantMenu];
};
