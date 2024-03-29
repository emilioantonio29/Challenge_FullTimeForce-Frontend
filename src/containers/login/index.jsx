import React, {useState, useContext} from "react";
import { emailValidator } from "../../utils/hooks/regex-validator";
import './containers-login.scss';
import { UserGlobalContextMemorySpace } from "../../contexts/user-context";
import CommonSpacer from "../../components/common/spacer";
import { login } from "../../utils/hooks/general-axios";
import Overlay from "../../components/common/overlay";

const LoginContainer = () => {

    const {user, setUser} = useContext(UserGlobalContextMemorySpace);

    const error500 = process.env.REACT_APP_LOGIN_MESSAGE_500;
    const error404 = process.env.REACT_APP_LOGIN_MESSAGE_404;
    const invalidEmail = process.env.REACT_APP_LOGIN_MESSAGE_INVALID_EMAIL;
    const requiredData = process.env.REACT_APP_LOGIN_MESSAGE_REQUIRED_DATA;

    const [loader, setLoader] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) =>{
        event.preventDefault();
        setErrorMsg("");

        if(!email || !password){
            setErrorMsg(requiredData)
        }else{
            if(emailValidator(email)){
                setErrorMsg(invalidEmail)
            }else{

                setLoader(true);
                localStorage.clear();

                let res = await login(email, password);
                
                if(res?.status == 200 && res.data){
                    setUser(res.data);
                }else if(res?.response?.status == 404){
                    setErrorMsg(res?.response?.data?.message || error404)
                }else{
                    setErrorMsg(error500)
                }

                setLoader(false);

            }
        }
    }

    return (  
        <>
            {loader? <Overlay/> : null}
            
            <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                    <form className="d-flex flex-column justify-content-center form-login" onSubmit={handleLogin}>
                        <div className="form-group form-group-login d-flex justify-content-center" >
                            <input 
                                onChange={(e)=> setEmail(e.target.value)} value={email}
                                type="text" 
                                className="form-control input-login" 
                                placeholder="Email"/>
                        </div>
                        <CommonSpacer marginBottom="20px"/>
                        <div className="form-group form-group-login d-flex justify-content-center">
                            <input 
                                onChange={(e)=> setPassword(e.target.value)} value={password}
                                type="password" 
                                className="form-control input-login" 
                                placeholder="Contraseña"/>
                        </div>
                        <CommonSpacer marginBottom="20px"/>
                        {loader ? 
                        <>
                            <button className="btn">
                                <span className="spinner-grow spinner-grow-sm"></span>
                                <span className="spinner-grow spinner-grow-sm"></span>
                                <span className="spinner-grow spinner-grow-sm"></span>
                            </button>
                        </> 
                        : 
                        <>
                            <div className="form-group form-group-login d-flex justify-content-center">
                                <input type="submit" className="btn btn-primary input-login input-submit" value="Continuar"/>
                            </div>
                        </>
                        }
                        <CommonSpacer marginBottom="20px"/>
                    </form>
                </div>
                <div className="input-login">
                    <CommonSpacer marginBottom="20px"/>
                    <p style={{textAlign:"center"}} className="fontColorMain">{errorMsg}</p>
                </div>
            </div>
        </>
    );
}

export default LoginContainer;
