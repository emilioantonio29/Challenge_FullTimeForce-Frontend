import React, {useContext} from 'react';
import { UserGlobalContextMemorySpace } from '../contexts/user-context';
import PublicStack from './public-stack';
import UserStack from './user-stack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommonMainLoader from '../components/common/main-loader';

const Navigator = () => {

    const {user, mainLoader} = useContext(UserGlobalContextMemorySpace);

    return (
        <>
            {mainLoader ? <CommonMainLoader/>
            :
            <BrowserRouter>
            {!user?.username ?

                /* STACK NOT LOGGED IN */
                <PublicStack/>
                :
                /* STACK USER LOGGED IN */
                <UserStack/>
                
            }
            </BrowserRouter>
        }
      </>
    );
}

export default Navigator;
