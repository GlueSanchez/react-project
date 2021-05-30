import React from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import ResponsiveAppBar from "./Navbar/ResponsiveAppBar";
import {Hidden} from "@material-ui/core";

import withWidth from '@material-ui/core/withWidth';
const Header = (props) => {

    return (
        <>
            <Hidden  only={['md', 'sm', 'xs']}>
                <NavbarComponent/>
            </Hidden>
            <Hidden only={['lg', 'xl']}>
                <ResponsiveAppBar/>
            </Hidden>
        </>
    );
};


export default withWidth()(Header);