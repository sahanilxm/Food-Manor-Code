
import { useRestaurants } from "../hooks/useRestaurant";
import { RestaurantList} from './index';
import { IMAGE_URL } from "../config/app-config";

const Body = () =>{

    const [restaurantList] = useRestaurants();
    console.log(restaurantList);

    return(
        <>
            {
                restaurantList.map(restaurant => <RestaurantList key={restaurant?.info?.id} name={restaurant?.info?.name} imageURL={IMAGE_URL+ restaurant?.info?.cloudinaryImageId} price={restaurant?.info?.cloudinaryImageId?.costForTwo} rating={restaurant?.info?.avgRating} cuisines={restaurant?.info?.cuisines}/>)
                
            }
        </>
    );
};

export default Body;