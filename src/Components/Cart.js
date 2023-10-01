import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { removeItem, clearCart } from '../utils/cartSlice.js';

const CartItem = ({name, imageURL, description, rating, price}) =>{
    
    const dispatch = useDispatch();

    return(
        <div>
            <div className='flex border border-black justify-between px-6 py-2 w-4/5 my-2 mx-auto'>
                <div className='w-3/4'>
                    <p className='line-clamp-1'>{name}</p>
                    <p>₹ {price===undefined ?250:price/100}</p>
                    <p>{rating === undefined? 3.2 : rating} ⭐</p>
                    <p className=' line-clamp-1'>{description}</p>
                </div>
                <div>
                    <img src={imageURL} className='w-36 h-24 border border-black p-0.5 rounded-md'/>
                    <button className='border border-black w-36 mt-1' onClick={()=>dispatch(removeItem(name))}>Remove</button>
                </div>
            </div>
        </div>
    );
}



const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(typeof(cartItems));
    let totalPrice = Array.from(cartItems).reduce((sum, item ) => {return sum+(item.price === undefined ? 250 :Math.floor(item.price/100))},0);
    console.log(totalPrice);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleOrder = () =>{
        dispatch(clearCart());
        alert('🎉Hurray!!!\nYour Order placed Successfully.');
        navigate('/');
    }


    return(
        <div>
            <div>
                {
                    cartItems.map((item, index) => <CartItem key={index} name={item.name} imageURL={item.imageURL} description={item.description} rating={item.rating} price={item.price}/>)
                }
            </div>
            <div>
                {
                    cartItems.length == 0 ? <p>Cart is empty ..... </p> :
                    <div className='border border-black px-6 py-2 w-4/5 my-2 mx-auto'>
                        <hr/>
                        <div className='flex justify-between'>
                            <div>
                                <p>Item Total</p>
                                <p>Delivery fee</p>
                                <p>Platform fee</p>
                                <p>GST and Restaurant Charges</p>
                            </div>
                            <div>
                                <p>₹ {Math.floor(totalPrice)}</p>
                                <p>₹ 50</p>
                                <p>₹ 5</p>
                                <p>₹ {Math.floor((totalPrice*18)/(100))}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between'>
                            <p>TO PAY</p>
                            <p>₹ {Math.floor((totalPrice*18)/(100))+Math.floor(totalPrice)+55}</p>
                        </div>
                        <div className='flex justify-center border border-black w-fit mx-auto'>
                            <button className='p-1.5' onClick={()=>{ handleOrder() }}>Proceed To Checkout</button>
                        </div>
                    </div>
                }
            </div>
        </div>

    );
};

export default Cart;