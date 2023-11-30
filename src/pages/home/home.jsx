import React, {useEffect} from 'react';
import CommonSpacer from '../../components/common/spacer';
import '../pages.scss';
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {

    const navigate = useNavigate();

    useEffect(()=>{

        //Mount: 
        if(props.redirect){
            navigate("/home")
        }

        return () =>{
        //Unmount
    
        }
    }, [])

    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "55vh", paddingTop: "50px"}} className='container'>
            <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px"}}>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h6 className="display-6 color-font-main" style={{alignText: "center", fontWeight: "bold"}}>test</h6>
                    </div>
                    <CommonSpacer marginTop={"20px"}/>

                    
                </div>
            </div>
        </div>
    );
}

export default HomePage;