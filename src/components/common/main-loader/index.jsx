import React from 'react';
import {BiSolidBank} from 'react-icons/bi'
import logo from "../../../assets/fulltimeforce.svg"

const CommonMainLoader = () => {
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{height: "100vh"}}>
                <div className='d-flex justify-content-center'>
                    <img src={logo} alt="Logo" />
                    {/* <BiSolidBank size='100px' style={{color: "#000d4e"}}/> */}
                </div>
                <div className='d-flex justify-content-center align-items-center' style={{marginTop: "15px"}}>
                    <div style={{width: "1rem", height: "1rem", color: "#B88CB8"}} className="spinner-grow text-muted"></div> 
                    <div style={{marginLeft: "5px", width: "1rem", height: "1rem", color: "#B88CB8"}}className="spinner-grow text-muted"></div>
                    <div style={{marginLeft: "5px", width: "1rem", height: "1rem", color: "#B88CB8"}}className="spinner-grow text-muted"></div>
                </div>
            </div>
        </>

    );
}
export default CommonMainLoader;