export const NotFound = () =>{
    return(
        <div className="w-full flex px-8">
            <img className="mx-auto" src="https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-6275834-5210416.png"/>
            <p className="font-itemFont text-3xl my-auto">I'm sorry, but it seems that we couldn't find the item you were looking for. Please double-check your search query or try using different keywords to refine your search.</p>
        </div>
    );
};

export const NoItem = () => {
    return(
        <div className="w-full flex px-8">
            <img className="mx-auto w-3/5" src="https://shop.unicornstore.in/beam/themes/2019/assets/img/cart_empty.png" />
            <div className="my-auto text-center">
                <p className="font-itemFont text-3xl">It seems like your cart is currently empty. 🙁</p>
            </div>
        </div>
    );
}