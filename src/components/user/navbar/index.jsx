import React, {useContext} from 'react';
import { UserGlobalContextMemorySpace } from '../../../contexts/user-context';
import {BiSolidBank} from 'react-icons/bi';
import { NavLink } from "react-router-dom"; 
import './components-navbar.scss';
import logo from '../../../assets/fulltimeforce.svg';

const NavbarComponent = () => {

    const {logout} = useContext(UserGlobalContextMemorySpace);

    return (
        <nav className="navbar navbar-expand-lg navbar-light link-active">
            <div className="d-flex container justify-content-between">
            <div className="navbar-collapse center-box" id="navbarText" style={{width: "100%"}}>
                {/* <BiSolidBank size='100px' style={{color: "blue"}}/> */}
                <img style={{height: "5vh", marginLeft: "-22px", marginRight: "10px"}} src={logo} className="" alt="logo" />
                <span className="navbar-text my-2 my-sm-0">Challenge FullTimeForce</span>
            </div>
            <div className="navbar-collapse center-box" id="navbarText" >
                <ul className="navbar-nav ">
                <li className="nav-item">
                    <NavLink to="/home" className={({ isActive }) => (isActive ? 'link-active' : 'text-link')} exact="true" activeclassname="link-active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/repository-search`} className={({ isActive }) => (isActive ? 'link-active' : 'text-link')} exact="true" activeclassname="link-active">Search</NavLink>
                </li>
                </ul>
            </div>
            <div className="navbar-collapse center-box" id="navbarText" style={{width: "100%"}}>
                <div style={{width: "100%"}}>
                <ul className="navbar-nav ">
                    <li className="nav-item close-session" style={{width: "100%"}}>
                    <NavLink onClick={logout}  className={"text-link text-link-m"}>Sign out</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            <div className=" navbar-collapse" id="navbarText">
                <span className="navbar-text" style={{alignText: "right"}}>
                </span>
            </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;