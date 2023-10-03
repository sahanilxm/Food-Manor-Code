import emptyCart from '../assets/images/emptyCart.png';
import noItem from '../assets/images/noItem.png';

export const NotFound = () =>{
    return(
        <div className="w-full md:flex justify-center h-full space-x-2">
            <img className="w-full md:w-3/5 md:h-3/5 " src={noItem}/>
            <div>
                <p className="font-itemFont text-xl md:text-3xl my-4 md:mt-36">I'm sorry, but it seems that we couldn't find the item you were looking for. Please double-check your search query or try using different keywords to refine your search.</p>
            </div>
        </div>
    );
};

export const NoItem = () => {
    return(
        <div className="w-full md:flex md:justify-center">
            <img className="w-4/5 md:w-2/5 md:h-4/5 mx-auto" src={emptyCart} />
            <div className="md:my-64 md:w-2/5 text-center md:pr-10">
                <p className="font-itemFont text-3xl">It seems like your cart is currently empty. 🙁</p>
            </div>
        </div>
    );
}