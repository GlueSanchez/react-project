import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import c from './NavbarComponent.module.css';

const NavbarComponent = (props) => {
    return (
        <>
            <Navbar className={c.navbar} collapseOnSelect expand="md" bg="dark" variant="dark">
                <div className={c.opo}>
                    <div className={c.block}>
                    <Navbar.Brand>
                        <img
                            src="https://steamuserimages-a.akamaihd.net/ugc/849347535113279721/AF826A5BD75A44D4198BFB14E3C451ECE98097FA/"
                            href={'/'}
                            height={30}
                            width={30}
                            alt="logo"
                            className={'d-inline-block align-top'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={'responsive-navbar-nav'}/>
                    </div>
                    <Navbar.Collapse className={c.navbarItems} id="responsive-navbar-nav">
                        <Nav className={c.navbarItem}>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link href="#"> Dank memes</Nav.Link>
                        </Nav>
<div className={c.botNav}>
                        <Nav className={c.navbarBottom} >
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link href="#"> Dank memes</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link href="#"> Dank memes</Nav.Link>
                    </Nav>
</div>
                    </Navbar.Collapse>

                </div>




            </Navbar>
        </>

    );
};


export default NavbarComponent;