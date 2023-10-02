import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IMAGE_URL, NO_IMAGE_URL } from '../config/app-config';
import { useRestaurantMenu } from '../hooks/useRestaurantMenu';
import { addItem } from '../utils/cartSlice';
import {RestaurantMenuShimmer, NotFound} from './index';


const MenuItem = ({name, description, imageURL, price, rating}) =>{

    const dispatch = useDispatch();
    const itemDetails = {name, description, imageURL, price, rating};

    return (
        <div className='border flex justify-between px-6 py-2 w-4/5 my-2 mx-auto bg-itemBg'>
            <div className='w-3/4'>
                <p className='line-clamp-1 font-itemFont text-xl font-semibold'>{name}</p>
                <p className='font-normal'>₹ {price===undefined ?250:price/100}</p>
                <p className='font-normal'>{rating === undefined? 3.2 : rating} ⭐</p>
                <p className='font-normal line-clamp-1'>{description}</p>
            </div>
            <div>
                <img src={imageURL} className='w-36 h-24 border border-black p-0.5 rounded-md'/>
                <button className='border text-white w-36 mt-1 bg-btnBg hover:bg-blue-950' onClick={()=>dispatch(addItem(itemDetails))}>Add</button>
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

    const handleSorting = (sortingParam) => {
        if(sortingParam == 'none'){
            return ;
        }
        let newArr = filteredRestaurantMenu;
        newArr.sort((a,b) => a?.card?.info[`${sortingParam}`] - b?.card?.info[`${sortingParam}`]);
        setFilteredRestaurantMenu(newArr);
    };

    const handleRestaurantMenu = () =>{
        let filteredData = restaurantMenu.filter(item => item?.card?.info?.name.toLowerCase().includes(searchItem.toLowerCase()));
        setFilteredRestaurantMenu(filteredData);
    };

    return(
        <div className='w-full px-4 pt-24'>
            <div className='border mb-8 bg-restaurantBg'>
                <div className='flex w-3/4 justify-center p-2'>
                    <div>
                        <img src={restaurantDetail?.cloudinaryImageId !== undefined ? IMAGE_URL+restaurantDetail?.cloudinaryImageId: NO_IMAGE_URL} className='w-48 h-40 rounded-md p-0.5'/>
                    </div>
                    <div className='pl-4 py-8 space-y-2'>
                        <p className='underline font-restaurantFont text-xl'>{restaurantDetail?.name}</p>
                        <div className='flex space-x-3'>
                            <p className='font-normal'>{restaurantDetail?.avgRating} ⭐</p>
                            <p className='font-normal'>|</p>
                            <p className='font-normal'>{restaurantDetail?.totalRatingsString}</p>
                        </div>
                        <p className='font-normal'>{restaurantDetail?.costForTwoMessage}</p>
                    </div>
                </div>
            </div>    
                {
                    restaurantMenu?.length == 0 ? <RestaurantMenuShimmer/> : 
                    <div>
                        <div className='border flex justify-between px-6 py-2 w-4/5 my-2 mx-auto bg-restaurantBg'>
                            <p className='font-normal'>Recommeded Items</p>
                            <div>
                                <label className='font-normal'>Sort :</label>
                                <select className='font-normal' onChange={(e)=>handleSorting(e.target.value)}>
                                    <option value="none" className='font-normal'>None</option>
                                    <option value="price" className='font-normal'>Price</option>
                                    <option value="rating" className='font-normal'>Rating</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-center'>
                            <input placeholder='Search a food...' className='border  p-1.5 rounded-l-md font-itemFont font-bold w-1/4' onChange={(e)=> setSearchItem(e.target.value)}/>
                            <button className='p-1.5 border bg-btnBg rounded-r-md text-white hover:bg-blue-950' onClick={()=>handleRestaurantMenu()}>Search</button>
                        </div>
                            {
                                filteredRestaurantMenu.length === 0 ? <NotFound/> :filteredRestaurantMenu.map((item, index) =><MenuItem key={index} name={item?.card?.info?.name} description={item?.card?.info?.description} imageURL={item?.card?.info?.imageId!==undefined?IMAGE_URL+item?.card?.info?.imageId:NO_IMAGE_URL} rating={item?.card?.info?.ratings?.aggregatedRating?.rating} price={item?.card?.info?.price} />)
                            }
                    </div>
                }
        </div>
    );
};

export default RestaurantMenu;