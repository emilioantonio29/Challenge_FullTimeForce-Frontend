import React, {useEffect} from 'react';
import LoginComponent from '../../components/public/login';
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {

    const navigate = useNavigate();

    useEffect(()=>{

        //Mount: 
        if(props.redirect){
            navigate("/")
        }

        return () =>{
        //Unmount
    
        }
    }, [])

    return (
        <LoginComponent/>
    );
}

export default LoginPage;