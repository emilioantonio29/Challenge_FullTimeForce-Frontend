import React, {useContext} from 'react';
import { UserGlobalContextMemorySpace } from '../../contexts/user-context';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/home/home';

const UserStack = () => {

    return (
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='*' element={<HomePage redirect={true}/>}/>
        </Routes>     
    );
}

export default UserStack;
