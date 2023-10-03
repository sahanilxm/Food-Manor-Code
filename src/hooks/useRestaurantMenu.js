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


            let menuSet = new Set();
            for(let i=0;i<response?.data?.cards?.length;i++){
                if(response?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards !== undefined){
                    for(let j=0;j<response?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length;j++){
                        if(response?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[j]?.card?.card?.itemCards !== undefined){
                            for(let k=0;k<response?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[j]?.card?.card?.itemCards?.length;k++){
                                menuSet.add(response?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[j]?.card?.card?.itemCards[k]);
                                if(menuSet.size >= 30){
                                    break;
                                }
                            }
                            if(menuSet.size >= 30){
                                break;
                            }
                        }
                    }
                    break;
                }
            }
            setFilteredRestaurantMenu(Array.from(menuSet));
            setRestaurantMenu(Array.from(menuSet));
        };
        fetchData();
    }, []);

    return [restaurantDetail, restaurantMenu];
};
