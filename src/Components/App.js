import { Outlet } from 'react-router-dom';
import { Header, Footer, ScrollTop} from './index';
import { Provider } from 'react-redux';

import store  from '../utils/store';

const App = () =>{
    return(
        <div>
            <Provider store={store}>
                <Header />
                <div className='min-h-screen'>
                    <Outlet />
                </div>
                <Footer/>
                <ScrollTop/>
            </Provider>
        </div>
    );
};


export default App;