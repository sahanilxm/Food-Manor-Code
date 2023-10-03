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
        <div className='border flex justify-between px-1 sm:px-6 py-2 w-full sm:w-4/5 my-2 mx-auto bg-itemBg'>
            <div className='w-3/4'>
                <p className='font-itemFont text-md sm:text-xl font-semibold'>{name}</p>
                <p className='font-normal'>₹ {price===undefined ?250:price/100}</p>
                <p className='font-normal'>{rating === undefined? 3.2 : rating} ⭐</p>
                <p className='font-normal line-clamp-1'>{description}</p>
            </div>
            <div className='flex flex-col  place-content-end'>
                <img src={imageURL} className='w-24 h-20 sm:w-36 sm:h-24 border border-black p-0.5 rounded-md my-auto'/>
                <button className='border text-white w-24 sm:w-36 mt-1 bg-btnBg hover:bg-blue-950' onClick={()=>dispatch(addItem(itemDetails))}>Add</button>
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
        let newArr = [...filteredRestaurantMenu];
        newArr.sort((a,b) => {
            if(sortingParam === 'price'){
                return (a?.card?.info?.price ===undefined ? 250 :a?.card?.info?.price) - (b?.card?.info?.price ===undefined ? 250 :b?.card?.info?.price);
            }
            else if(sortingParam === 'none'){
                return a?.card?.info?.id - b?.card?.info?.id;
            }
            else{
                return (a?.card?.info?.ratings?.aggregatedRating?.rating === undefined?3.2:a?.card?.info?.ratings?.aggregatedRating?.rating)  - (b?.card?.info?.ratings?.aggregatedRating?.rating === undefined?3.2:b?.card?.info?.ratings?.aggregatedRating?.rating);
            }
        });
        setFilteredRestaurantMenu(newArr);
    };

    const handleRestaurantMenu = () =>{
        let filteredData = restaurantMenu.filter(item => item?.card?.info?.name.toLowerCase().includes(searchItem.toLowerCase()));
        setFilteredRestaurantMenu(filteredData);
    };

    return(
        <div className='w-full px-4 pt-24'>
            <div className='border mb-8 bg-restaurantBg'>
                <div className='flex sm:w-3/4 justify-center p-2'>
                    <div>
                        <img src={restaurantDetail?.cloudinaryImageId !== undefined ? IMAGE_URL+restaurantDetail?.cloudinaryImageId: NO_IMAGE_URL} className='w-48 h-40 rounded-md p-0.5'/>
                    </div>
                    <div className='pl-1 sm:pl-4 sm:py-8 space-y-2'>
                        <p className='underline font-restaurantFont sm:text-xl'>{restaurantDetail?.name}</p>
                        <div className='sm:flex sm:space-x-3 '>
                            <p className='font-mono text-sm sm:font-normal'>{restaurantDetail?.avgRating} ⭐</p>
                            <p className='font-mono hidden sm:block'>|</p>
                            <p className='font-thin text-sm sm:font-normal'>{restaurantDetail?.totalRatingsString}</p>
                        </div>
                        <p className='font-thin text-sm sm:font-normal'>{restaurantDetail?.costForTwoMessage}</p>
                    </div>
                </div>
            </div>
                {
                    restaurantMenu?.length == 0 ? <RestaurantMenuShimmer/> : 
                    <div>
                        <div className='text-center'>
                            <input placeholder='Search a food...' className='border   p-1.5 rounded-l-md font-itemFont font-bold w-2/3 sm:w-1/3' onChange={(e)=> setSearchItem(e.target.value)}/>
                            <button className='p-1.5 border bg-btnBg rounded-r-md text-white hover:bg-blue-950 ' onClick={()=>handleRestaurantMenu()}>Search</button>
                        </div>
                            {
                                filteredRestaurantMenu.length === 0 ? <NotFound/> :
                                <div>
                                    <div className='border flex justify-between px-1 sm:px-6 py-2 w-full sm:w-4/5 my-2 sm:mx-auto bg-restaurantBg'>
                                        <p className='font-mono text-sm sm:font-normal'>Recommeded Items</p>
                                        <div className='sm:flex text-center'>
                                            <label className='font-mono text-sm sm:font-normal'>Sort :</label>
                                            <select className='font-mono text-sm sm:font-normal' onChange={(e)=>handleSorting(e.target.value)}>
                                                <option value="none" className='font-mono text-sm sm:font-normal'>None</option>
                                                <option value="price" className='font-mono text-sm sm:font-normal'>Price</option>
                                                <option value="rating" className='font-mono text-sm sm:font-normal'>Rating</option>
                                            </select>
                                        </div>
                                    </div>
                                    {
                                        filteredRestaurantMenu.map((item, index) =><MenuItem key={index} name={item?.card?.info?.name} description={item?.card?.info?.description} imageURL={item?.card?.info?.imageId!==undefined?IMAGE_URL+item?.card?.info?.imageId:NO_IMAGE_URL} rating={item?.card?.info?.ratings?.aggregatedRating?.rating} price={item?.card?.info?.price} />)
                                    }
                                </div>
                            }
                    </div>
                }
        </div>
    );
};

export default RestaurantMenu;