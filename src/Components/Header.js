import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className=" flex justify-between border border-black p-8 mb-10">
            <div>
                <p>Food Manor</p>
            </div>
            <div>
                <ul className=" flex">
                    <li className="mx-2"><Link to={'/'}>Home</Link></li>
                    <li className="mx-2"><Link to={'/about'}>About</Link></li>
                    <li className="mx-2"><Link to={'/cart'}>Cart</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;