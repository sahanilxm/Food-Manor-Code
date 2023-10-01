const RestaurantCardShimmer = () => {
    return(
            <div className="rounded-md m-2">
                <div className="animate-pulse p-1.5 space-y-1 ">
                    <div className="h-48 w-full rounded-md bg-gray-200"></div>
                    <div className="h-5 bg-gray-200"></div>
                    <div className="h-5 bg-gray-200"></div>
                    <div className="flex space-x-1.5">
                        <div className="h-5 bg-gray-200 w-1/3"></div>
                        <div className="h-5 bg-gray-200 w-1/3"></div>
                    </div>
                    <div className="h-5 bg-gray-200 w-1/2"></div>
                </div>
            </div>
        
    );
};

export const RestaurantShimmer = () => {
    return(
        <div className="flex flex-wrap w-full">
            {
                Array(20).fill("").map(item => <div className="w-1/6"><RestaurantCardShimmer/></div>)
            }
        </div>
    );
} 
