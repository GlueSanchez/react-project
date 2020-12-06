import React from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import AboutContainer from "./About/AboutComponent";

const Header = (props) => {
    return (<>
        <NavbarComponent/>
        <AboutContainer />
    </>);
};


export default Header;