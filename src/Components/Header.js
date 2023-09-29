const Header = () =>{
    return(
        <div className=" flex justify-between">
            <div>
                <p>Food Manor</p>
            </div>
            <div>
                <ul className=" flex">
                    <li className="mx-2">Home</li>
                    <li className="mx-2">About</li>
                    <li className="mx-2">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;