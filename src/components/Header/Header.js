import React from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import AboutContainer from "./About/AboutComponent";
import c from './Header.module.css';

const Header = (props) => {
    return (<div className={c.block}>
        <NavbarComponent/>
        <AboutContainer />
    </div>);
};


export default Header;