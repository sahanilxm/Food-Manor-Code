import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () =>{

    const cartItem = useSelector(store => store.cart.items);

    return(
        <div className="fixed w-full">
            <div className=" flex justify-between border rounded-md p-6 bg-restaurantBg">
                <div>
                    <p className="text-logoText font-logoFont text-2xl font-extrabold">Food Manor</p>
                </div>
                <div>
                    <ul className=" flex">
                        <li className="mx-2 font-navFont text-lg hover:underline hover:text-btnBg"><Link to={'/'}>Home</Link></li>
                        <li className="mx-2 font-navFont text-lg hover:underline hover:text-btnBg"><Link to={'/about'}>About</Link></li>
                        <li className="mx-2 font-navFont text-lg hover:underline hover:text-btnBg"><Link to={'/cart'}>Cart-{cartItem.length} items</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;