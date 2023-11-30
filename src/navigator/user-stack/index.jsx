import React, {useContext} from 'react';
import { UserGlobalContextMemorySpace } from '../../contexts/user-context';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/home/home';
import RepositorySearchPage from '../../pages/repository-search';
import NavbarComponent from '../../components/user/navbar';
import FooterComponent from '../../components/user/footer';

const UserStack = () => {

    return (
        <div className='app'>
            <NavbarComponent/>
                <div className='content'>
                    <Routes>
                        <Route path='/home' element={<HomePage/>}/>
                        <Route path='/repository-search' element={<RepositorySearchPage/>}/>
                        <Route path='*' element={<HomePage redirect={true}/>}/>
                    </Routes>     
                </div>
            {/* <FooterComponent/> */}
        </div>
    );
}

export default UserStack;
