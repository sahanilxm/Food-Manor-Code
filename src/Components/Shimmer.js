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
                Array(20).fill("").map((item, index) => <div key={index} className="w-1/6"><RestaurantCardShimmer/></div>)
            }
        </div>
    );
};


const RestaurantMenuItemShimmer = () => {
    return(
        <div>
            <div className='animate-pulse flex justify-between px-6 py-2 w-4/5 my-2 mx-auto border'>
                <div className='w-3/4 space-y-1'>
                    <div className="bg-gray-200 h-6 w-64"></div>
                    <div className="bg-gray-200 h-6 w-20"></div>
                    <div className="bg-gray-200 h-6 w-20"></div>
                    <div className="bg-gray-200 h-6"></div>
                </div>
                <div className="space-y-1">
                    <div className="bg-gray-200 w-36 h-24 rounded-md"></div>
                    <div className="bg-gray-200 h-6"></div>
                </div>
            </div>
        </div>
    );
}

export const RestaurantMenuShimmer = () =>{
    return (
        <div>
            <div className='animate-pulse px-6 py-2 w-4/5 my-2 mx-auto space-y-2 '>
                <div className="flex justify-between border p-2">
                    <div className="h-6 w-36 bg-gray-200"></div>
                    <div className="h-6 w-10 bg-gray-200"></div>
                </div>
                <div className="flex space-x-1 justify-center">
                    <div className="h-6 w-48 bg-gray-200"></div>
                    <div className="h-6 w-16 bg-gray-200"></div>
                </div>
            </div>
            {
                Array(20).fill("").map((item,index) => <RestaurantMenuItemShimmer key={index} />)
            }
        </div>
    );
};



