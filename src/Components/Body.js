
import { useRestaurants } from "../hooks/useRestaurant";
import { RestaurantCard} from './index';
import { IMAGE_URL } from "../config/app-config";

const Body = () =>{

    const [restaurantList] = useRestaurants();
    console.log(restaurantList);

    return(
        <div className=" w-screen">
            <div className="flex flex-wrap justify-around">
                {
                    restaurantList?.length === 0 ? <p>Loading</p> : restaurantList.map(restaurant => <RestaurantCard key={restaurant?.info?.id} name={restaurant?.info?.name} imageURL={IMAGE_URL+ restaurant?.info?.cloudinaryImageId} price={restaurant?.info?.cloudinaryImageId?.costForTwo} rating={restaurant?.info?.avgRating} cuisines={restaurant?.info?.cuisines}/>)
                    
                }
            </div>
        </div>
    );
};

export default Body;