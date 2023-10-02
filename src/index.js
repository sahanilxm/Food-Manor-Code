import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {App, Body, Cart, RestaurantMenu} from './Components/index';

const root = ReactDOM.createRoot(document.querySelector('#root'));


const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children: [
            {
                path: '/',
                element : <Body/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path: 'restaurants/:id',
                element: <RestaurantMenu/>
            }
        ]
    },
    
]);

root.render(<RouterProvider router={appRouter}/>)