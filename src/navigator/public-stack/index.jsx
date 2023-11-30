import React, {useContext} from 'react';
import { UserGlobalContextMemorySpace } from '../../contexts/user-context';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/login';

const PublicStack = () => {

    const {user, mainLoader} = useContext(UserGlobalContextMemorySpace);

    return (
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='*' element={<LoginPage redirect={true}/>}/>
        </Routes>     
    );
}

export default PublicStack;
