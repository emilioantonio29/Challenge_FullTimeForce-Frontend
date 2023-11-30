import React from 'react';
import styles from './LoginComponent.module.scss';
import CommonSpacer from '../../common/spacer'
import logo from '../../../assets/fulltimeforce.svg'
import SideRightImage from '../right-side-image';
import LoginContainer from '../../../containers/login';

const LoginComponent = () => {

    return (
        <section className={`${styles.sectionLogin} d-flex align-items-center`}>
            <div className="d-flex align-items-center" style={{width:"100%"}}>
                <div className={`${styles.loginBox} d-flex justify-content-center`}>
                    <div className={`jumbotron bg-light ${styles.jumbotronLogin} d-flex flex-column justify-content-center`}>
                        <div className="d-flex justify-content-center">
                            <img src={logo} className={`${styles.AppLogo}`} alt="logo" />
                        </div>
                        <CommonSpacer marginBottom="20px"/>
                        <div className="d-flex justify-content-center">
                            <h3 className={styles.fontColorGrey}>CHALLENGE</h3>
                        </div>
                        <CommonSpacer marginBottom="20px"/>
                        <p style={{textAlign: "center"}} className={styles.fontColorGrey}>Inicio de sesión</p>
                        <CommonSpacer marginBottom="20px"/>
                        <div className="d-flex justify-content-center">
                            <LoginContainer/>
                        </div>
                        <CommonSpacer marginBottom="20px"/>
                    </div>
                </div>
                <SideRightImage/>
            </div>
        </section>
    );
}

export default LoginComponent;