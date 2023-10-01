import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { RESTAURANT_MENU_API_URL, IMAGE_URL } from '../config/app-config';


const MenuItem = ({name, description, imageURL, price, rating}) =>{
    return (
        <div className='flex border border-black justify-between px-6 py-2 w-4/5 my-2 mx-auto'>
            <div className='w-3/4'>
                <p className='line-clamp-1'>{name}</p>
                <p>₹ {price===undefined ?250:price/100}</p>
                <p>{rating === undefined? 3.2 : rating} ⭐</p>
                <p className=' line-clamp-1'>{description}</p>
            </div>
            <div>
                <img src={imageURL} className='w-36 h-24 border border-black p-0.5 rounded-md'/>
                <button className='border border-black w-36 mt-1'>Add</button>
            </div>
        </div>
    );
};


const RestaurantMenu = () => {
    let params = useParams();
    params = params.id;

    const [restaurantDetail, setRestaurantDetail] = useState({});
    const [restaurantMenu, setRestaurantMenu] = useState([]); 

    useEffect(()=>{
        const fetchData = async () => {
            let response = await fetch (RESTAURANT_MENU_API_URL+params);
            response = await response.json();
            setRestaurantDetail(response?.data?.cards[0]?.card?.card?.info);
            setRestaurantMenu(response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        };
        fetchData();
    }, []);

    console.log(restaurantMenu);

    return(
        <div className='w-full'>
            <div className='border border-black mb-8'>
                <div className='flex w-3/4 justify-center p-2'>
                    <div>
                        <img src={IMAGE_URL+restaurantDetail?.cloudinaryImageId} className='w-48 h-40 rounded-md border border-black p-0.5'/>
                    </div>
                    <div className='pl-4 py-8 space-y-2'>
                        <p className='underline'>{restaurantDetail?.name}</p>
                        <div className='flex space-x-3'>
                            <p>{restaurantDetail?.avgRating} ⭐</p>
                            <p>{restaurantDetail?.totalRatingsString}</p>
                        </div>
                        <p>{restaurantDetail?.costForTwoMessage}</p>
                    </div>
                </div>
            </div>
            <div className='flex border border-black justify-between px-6 py-2 w-4/5 my-2 mx-auto'>
                <p>Recommeded Items</p>
                <p>Sort</p>
            </div>
            <div className='text-center'>
                <input placeholder='Search a food...' className='border border-black p-1.5'/>
                <button className='border border-black p-1.5'>Search</button>
            </div>
            <div>
                {
                    restaurantMenu?.length == 0 ? <p>Loading</p> : 
                    restaurantMenu?.map((item) => {
                        if(item?.card?.card?.itemCards !== undefined){
                            return item?.card?.card?.itemCards?.map(subItem => <MenuItem name={subItem?.card?.info?.name} description={subItem?.card?.info?.description} imageURL={IMAGE_URL+subItem?.card?.info?.imageId} rating={subItem?.card?.info?.ratings?.aggregatedRating?.rating} price={subItem?.card?.info?.price} />)
                        }
                    })
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;