import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { IMAGE_URL, NO_IMAGE_URL } from '../config/app-config';
import { useRestaurantMenu } from '../hooks/useRestaurantMenu';


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

    const [filteredRestaurantMenu, setFilteredRestaurantMenu] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    const [restaurantDetail,restaurantMenu] = useRestaurantMenu(params, setFilteredRestaurantMenu);

    const handleRestaurantMenu = () =>{
        console.log(searchItem);
        let filteredData = restaurantMenu.filter(item => item?.card?.info?.name.toLowerCase().includes(searchItem.toLowerCase()));
        console.log(filteredData);
        setFilteredRestaurantMenu(filteredData);
    };

    return(
        <div className='w-full'>
            <div className='border border-black mb-8'>
                <div className='flex w-3/4 justify-center p-2'>
                    <div>
                        <img src={restaurantDetail?.cloudinaryImageId !== undefined ? IMAGE_URL+restaurantDetail?.cloudinaryImageId: NO_IMAGE_URL} className='w-48 h-40 rounded-md border border-black p-0.5'/>
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
                <input placeholder='Search a food...' className='border border-black p-1.5' onChange={(e)=> setSearchItem(e.target.value)}/>
                <button className='border border-black p-1.5' onClick={()=>handleRestaurantMenu()}>Search</button>
            </div>

            <div>
                {
                    filteredRestaurantMenu?.length == 0 ? <p>Loading</p> : filteredRestaurantMenu.map((item, index) =>
                    <MenuItem key={index} name={item?.card?.info?.name} description={item?.card?.info?.description} imageURL={item?.card?.info?.imageId!==undefined?IMAGE_URL+item?.card?.info?.imageId:NO_IMAGE_URL} rating={item?.card?.info?.ratings?.aggregatedRating?.rating} price={item?.card?.info?.price} />)
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;