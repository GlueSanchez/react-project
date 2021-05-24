import {Button, ButtonGroup, Dropdown, Nav, Navbar} from "react-bootstrap";
import React from "react";
import c from './NavbarComponent.module.css';
import {NavLink} from 'react-router-dom';
import logo from './../../../assets/images/logo.png';

const NavbarComponent = (props) => {

    return (

        <Navbar className={c.navbar}
                collapseOnSelect expand="lg">
            <div className={c.navbarWrapper}>
                <div className={c.navbarTop}>
                    <Navbar.Toggle aria-controls={'responsive-navbar-nav'}/>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            href={'/'}
                            height={75}
                            alt="logo"
                            className={'d-inline-block align-top'}/>
                    </Navbar.Brand>
                    <div className={c.linkItems}>
                        <a className={c.navLink} href="tel:+380979271652">+38 (097) 92-71-652</a>
                        <a className={c.navLink} href="tel:+380668664271">+38 (066) 86-64-271</a></div>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={c.navbarDown}>

                        <Dropdown as={ButtonGroup}>
                            <NavLink className={`${c.navLink}`} to="/gallery">Gallery</NavLink>

                            <Dropdown.Toggle split id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <NavLink to="/gallery-1">Gallery1</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink to="/gallery-2">Gallery2</NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                <NavLink to="/gallery-3">Gallery3</NavLink>
                            </Dropdown.Item>
                            </Dropdown.Menu>
                                                  </Dropdown>

                        <NavLink className={`${c.navLink} ${c.round} `} to="/">main</NavLink>
                        <NavLink className={`${c.navLink} ${c.round} `} to={'/articles'}>articles</NavLink>
                        <NavLink className={`${c.navLink} ${c.round} `} to={'/login'}>login</NavLink>
                        {/*<NavLink className={`${c.navLink} ${c.round} `} href="#hjkjhkj"> Dank memes</NavLink>*/}
                        {/*<NavLink className={`${c.navLink} ${c.round} `} href="#features">Features</NavLink>*/}
                        {/*<NavLink className={`${c.navLink} ${c.round} `} href="#pricing">Pricing</NavLink>*/}
                        {/*<NavLink className={`${c.navLink} ${c.round} `} href="#deets">More deets</NavLink>*/}
                        {/*<NavLink className={`${c.navLink} ${c.round} `} href="#lklk"> Dank memes</NavLink>*/}
                    </Nav>
                </Navbar.Collapse>

            </div>
        </Navbar>
    );
};


export default NavbarComponent;