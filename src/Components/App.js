import { Outlet } from 'react-router-dom';
import { Header, Footer} from './index';

const App = () =>{
    return(
        <div className='p-2 px-4'>
            <Header />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};


export default App;