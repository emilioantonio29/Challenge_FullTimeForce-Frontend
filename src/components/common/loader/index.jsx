import React from 'react';

const CommonLoader = (props) => {
    return (
        <>
            <div>
                <div style={{padding: "10px", minHeight: "calc(100vh - 50vh)", marginTop:props.marginTop}}className='d-flex justify-content-center align-items-center'>
                    <div style={{width: "3rem", height: "3rem", color: "#5d84aa"}} className="spinner-grow text-muted"></div> 
                    <div style={{marginLeft: "5px", width: "3rem", height: "3rem", color: "#5d84aa"}}className="spinner-grow text-muted"></div>
                    <div style={{marginLeft: "5px", width: "3rem", height: "3rem", color: "#5d84aa"}}className="spinner-grow text-muted"></div>
                </div>
            </div>
        </>
    );
}
export default CommonLoader;