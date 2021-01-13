import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import c from './NavbarComponent.module.css';

const NavbarComponent = (props) => {
    return (
        <>
            <Navbar className={c.navbar} collapseOnSelect expand="lg">
                <div className={c.navbarWrapper}>
                    <div className={c.navbarTop}>
                        <Navbar.Toggle aria-controls={'responsive-navbar-nav'}/>
                        <Navbar.Brand>
                            <img
                                src="https://steamuserimages-a.akamaihd.net/ugc/849347535113279721/AF826A5BD75A44D4198BFB14E3C451ECE98097FA/"
                                href={'/'}
                                height={75}
                                width={75}
                                alt="logo"
                                className={'d-inline-block align-top'}/>
                        </Navbar.Brand>
                        <div className={c.linkItems}>
                            <a className={c.navLink} href="tel:+380934804230">+38 (012) 31-25-955</a>
                            <a className={c.navLink} href="tel:+380123125955">+38 (012) 31-25-955</a>
                        </div>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={c.navbarDown}>
                            <a className={`${c.navLink} ${c.round}`} href="#features">Features</a>
                            <a className={`${c.navLink} ${c.round} `} href="#pricing">Pricing</a>
                            <a className={`${c.navLink} ${c.round} `} href="#deets">More deets</a>
                            <a className={`${c.navLink} ${c.round} `} href="#hjkjhkj"> Dank memes</a>
                            <a className={`${c.navLink} ${c.round} `} href="#features">Features</a>
                            <a className={`${c.navLink} ${c.round} `} href="#pricing">Pricing</a>
                            <a className={`${c.navLink} ${c.round} `} href="#deets">More deets</a>
                            <a className={`${c.navLink} ${c.round} `} href="#lklk"> Dank memes</a>
                        </Nav>
                    </Navbar.Collapse>

                </div>


            </Navbar>
        </>

    );
};


export default NavbarComponent;