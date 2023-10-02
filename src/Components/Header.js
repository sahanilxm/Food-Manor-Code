import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import store from "../utils/store";

const Header = () =>{

    const cartItem = useSelector(store => store.cart.items);

    return(
        <div className=" flex justify-between border rounded-md p-8 mb-10 bg-restaurantBg">
            <div>
                <p className="text-logoText">Food Manor</p>
            </div>
            <div>
                <ul className=" flex">
                    <li className="mx-2 text-navText"><Link to={'/'}>Home</Link></li>
                    <li className="mx-2 text-navText"><Link to={'/about'}>About</Link></li>
                    <li className="mx-2 text-navText"><Link to={'/cart'}>Cart<span className=" text-blue-950">-{cartItem.length} items</span></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;