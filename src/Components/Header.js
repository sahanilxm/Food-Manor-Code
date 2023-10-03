import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";

const MobileView = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-md shadow-restaurantBg fixed z-50">
        {
            isOpen == true ? 
            <div className="bg-black h-screen">
                <div className="flex justify-end">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UIdebivm1ysFXfQUvQqjFs6xy6u44CLOtQ&usqp=CAU" className="w-10 m-5 py-auto" onClick={()=>
                        { 
                            setIsOpen(!isOpen);
                            window.scrollTo(0,0,'smooth');
                        }
                    } />
                </div>
                <div className="flex flex-col w-full items-center my-36">
                    <ul className="space-y-4">
                        <li className="mx-2 font-navFont text-2xl hover:underline hover:text-btnBg text-white" onClick={()=>setIsOpen(!isOpen)}><Link to={'/'}>Home</Link></li>
                        <li className="mx-2 font-navFont text-2xl hover:underline hover:text-btnBg text-white" onClick={()=>setIsOpen(!isOpen)}><Link to={'/cart'}>Cart</Link></li>
                    </ul>
                </div>
            </div> : 
            <div className="sm:hidden flex justify-between p-4 fixed w-full bg-restaurantBg">
                <div>
                    <p className="text-blue-950 font-logoFont text-2xl font-extrabold">Food Manor</p>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png" className="h-8 hover:text-btnBg" onClick={()=>{ 
                            setIsOpen(!isOpen);
                            window.scrollTo(0,0,'smooth');
                    }}/>
                </div>
            </div>
        }
    </div>
  );
}

const Header = () =>{

    const cartItem = useSelector(store => store.cart.items);

    return(
        <>
            <MobileView/>
            <div className="w-full hidden sm:flex shadow-md shadow-restaurantBg fixed z-50">
                <div className="flex justify-between border w-full rounded-md p-2 md:p-4 lg:p-6 bg-restaurantBg">
                    <div>
                        <p className="text-blue-950 font-logoFont text-2xl font-extrabold">Food Manor</p>
                    </div>
                    <div>
                        <ul className="flex">
                            <li className="mx-2 font-navFont text-lg hover:underline hover:text-btnBg"><Link to={'/'}>Home</Link></li>
                            <li className="mx-2 font-navFont text-lg hover:underline hover:text-btnBg"><Link to={'/cart'}>Cart-{cartItem.length} items</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;