import React from "react";
import clsx from 'clsx';
import {NavLink} from 'react-router-dom';
import logo from './../../../assets/images/logo.png';
import {
    AppBar, Backdrop,
    Button,
    ClickAwayListener, Divider, Fade,
    Grow, Link, List, ListItem, ListItemIcon, ListItemText,
    MenuItem,
    MenuList, Modal,
    Paper,
    Popper, SwipeableDrawer,
    Toolbar,
    useScrollTrigger
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import c from '../../Footer/Footer.module.css';
import Login from "../../Login/Login";
import LockOpen from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        backgroundColor: '#342d2b',
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        flexDirection: 'column'
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    telNumbers: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    topHeader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
            color: 'white'
        },
    },
    anchorLink: {
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
            color: 'black'
        },
    },
    navLinks: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: '10px',

    },
    divider: {
        background: 'rgba(255, 255, 255, 0.5)',
        width: '100%',
        margin: '10px 0px',
    },
    linksBox: {
        display: 'flex',
        alignItems: 'center'
    },
    socialLinks: {
        marginRight: '10px',
    },
    buttonStyles: {
        color: 'white',
        border: '1px solid white',
        borderRadius: '30px',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        height: '36px'
    },
    icons: {
        color: 'white'
    }
}));

function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


const NavbarComponent = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (<>
        <div className={classes.root}>

            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.topHeader}>
                        <img
                            src={logo}
                            href={'/'}
                            height={60}
                            alt="logo"/>
                        <div className={classes.linksBox}>
                            <div className={c.footerLinks + ' ' + classes.socialLinks}>
                                <div className={c.row}>
                                    <div className={c.column}>
                                        <div className={classes.linkBox}>
                                            <a href="https://www.facebook.com/granit.mlynyska/"
                                               target="_blank">
                                                <FacebookIcon className={classes.icons}/>
                                            </a>
                                        </div>
                                        <div className={classes.linkBox}>
                                            <a href="https://google.com"
                                               target="_blank">
                                                <TelegramIcon className={classes.icons}/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={c.column}>
                                        <div className={classes.linkBox}>
                                            <Button onClick={handleOpenModal}>
                                                <LockOpen className={classes.icons}/>
                                            </Button>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                className={classes.modal}
                                                open={openModal}
                                                onClose={handleCloseModal}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                            >
                                                <Fade in={openModal}>
                                                    <Login/>
                                                </Fade>
                                            </Modal>
                                        </div>
                                        <div className={classes.linkBox}>
                                            <a href="https://google.com"
                                               target="_blank">
                                                <EmailIcon className={classes.icons}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.telNumbers}>
                                <Link className={classes.link} href="tel:+380979271652">+38 (097) 92-71-652</Link>
                                <Link className={classes.link} href="tel:+380668664271">+38 (066) 86-64-271</Link>

                                <Link className={classes.link} href={'#adress'}>Адреса: с.Млиниська</Link>
                            </div>


                        </div>
                    </div>
                    <Divider variant="middle" className={classes.divider}/>
                    <div className={classes.navLinks}>
                        <Button
                            className={classes.buttonStyles}
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            Галерея
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({TransitionProps, placement}) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow"
                                                      onKeyDown={handleListKeyDown}>
                                                <MenuItem>
                                                    <NavLink className={classes.anchorLink}
                                                             to="/gallery/single">
                                                        Одинарні
                                                    </NavLink>
                                                </MenuItem>
                                                <MenuItem>
                                                    <NavLink className={classes.anchorLink}
                                                             to="/gallery/double">
                                                        Подвійні
                                                    </NavLink>
                                                </MenuItem>
                                                <MenuItem>
                                                    <NavLink className={classes.anchorLink}
                                                             to="/gallery/elite">
                                                        Елітні
                                                    </NavLink>
                                                </MenuItem>
                                                {/*<MenuItem onClick={handleClose}>Logout</MenuItem>*/}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>

                        {/*<Button className={classes.buttonStyles} color="primary">*/}
                        {/*    <NavLink className={classes.link} to="/gallery">Gallery</NavLink>*/}
                        {/*</Button>*/}
                        <Button className={classes.buttonStyles} color="primary">
                            <NavLink className={classes.link} to="/">Головна</NavLink>
                        </Button>
                        <Button className={classes.buttonStyles} color="primary">
                            <NavLink className={classes.link} to={'/articles'}>Новини</NavLink>
                        </Button>
                        <Button className={classes.buttonStyles} color="primary">
                            <NavLink className={classes.link} to={'#adress'}>Де нас найти</NavLink>
                        </Button>

                    </div>

                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    </>);
};


export default NavbarComponent;