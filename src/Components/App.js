import { Outlet } from 'react-router-dom';
import { Header, Footer} from './index';
import { Provider } from 'react-redux';

import store  from '../utils/store';

const App = () =>{
    return(
        <div className='p-2 px-4'>
            <Provider store={store}>
                <Header />
                <div className='min-h-screen'>
                    <Outlet />
                </div>
                <Footer/>
            </Provider>
        </div>
    );
};


export default App;