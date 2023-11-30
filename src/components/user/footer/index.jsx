import React from 'react';
import './components-footer.scss';

const FooterComponent = () => {
    return (
        <>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#000d4e" fill-opacity="1" d="M0,224L1440,256L1440,320L0,320Z"></path>
            </svg> */}
            <footer className='footer'>
                <div className='Min-height-footer Footer-general d-flex align-items-center'>
                    <div className='container d-flex justify-content-center align-items-center'>
                        <p style={{color: "", marginTop: "10px", fontSize: "19px"}} className="color-light">© 2023 | about us: 
                            <a 
                                href="https://www.fulltimeforce.com/" 
                                target="_blank" rel="noreferrer"
                                className="color-light"
                                style={{marginLeft: "5px"}}
                            >
                                Challenge FullTimeForce
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterComponent;
