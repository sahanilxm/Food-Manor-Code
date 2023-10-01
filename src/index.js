import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {App, Body, About, Cart, RestaurantMenu} from './Components/index';

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
                path : 'about',
                element : <About/>
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