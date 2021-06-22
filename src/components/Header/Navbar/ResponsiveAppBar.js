import React from "react";
import clsx from 'clsx';
import {NavLink} from 'react-router-dom';
import logo from './../../../assets/images/logo.png';
import {
    AppBar,
    Button,
    ClickAwayListener, Divider,
    Grow, Link, List, ListItem, ListItemIcon, ListItemText,
    MenuItem,
    MenuList,
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
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        backgroundColor: '#342d2b',
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

    },
    topHeader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    respLink: {
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
            color: 'black'
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
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));


const ResponsiveAppBar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
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
                            height={45}
                            alt="logo"/>
                        <Button onClick={toggleDrawer(true)}>
                            <MenuIcon/>
                        </Button>
                        <SwipeableDrawer
                            anchor={'right'}
                            open={state}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            {/*Drawer*/}
                            <div
                                className={classes.list}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {/*<ListItem>*/}
                                    {/*    <Button className={classes.buttonStyles} color="primary">*/}
                                    {/*        <NavLink className={classes.respLink}*/}
                                    {/*                 to="/">*/}
                                    {/*            Головна*/}
                                    {/*        </NavLink>*/}
                                    {/*    </Button>*/}
                                    {/*</ListItem>*/}
                                    <ListItem>
                                        <Button className={classes.buttonStyles} color="primary">
                                            <NavLink className={classes.respLink} to="/gallery">Галерея</NavLink>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button className={classes.buttonStyles} color="primary">
                                            <NavLink className={classes.respLink}
                                                     to="/gallery/single">
                                                Одинарні
                                            </NavLink>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button className={classes.buttonStyles} color="primary">
                                            <NavLink className={classes.respLink}
                                                     to="/gallery/double">
                                                Подвійні
                                            </NavLink>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button className={classes.buttonStyles} color="primary">
                                            <NavLink className={classes.respLink}
                                                     to="/gallery/elite">
                                                Елітні
                                            </NavLink>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button className={classes.buttonStyles} color="primary">
                                            <NavLink className={classes.respLink}
                                                     to="/articles">
                                                Статті
                                            </NavLink>
                                        </Button>
                                    </ListItem>

                                </List>
                                <Divider/>
                                <List>
                                    <ListItem>
                                        <Link className={classes.respLink} href="tel:+380979271652">+38 (097)
                                            92-71-652</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link className={classes.respLink} href="tel:+380668664271">+38 (066)
                                            86-64-271</Link>
                                    </ListItem>
                                </List>
                                <Divider/>
                                <List>
                                    <ListItem>
                                        <a href="https://www.facebook.com/granit.mlynyska/"
                                           target="_blank">
                                            <FacebookIcon fontSize="small"/>
                                        </a>
                                        <a href="https://google.com"
                                           target="_blank">
                                            <TelegramIcon fontSize="small"/>
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="https://google.com"
                                           target="_blank">
                                            <PhoneIcon fontSize="small"/>
                                        </a>
                                        <a href="https://google.com"
                                           target="_blank">
                                            <EmailIcon fontSize="small"/>
                                        </a>
                                    </ListItem>
                                </List>
                            </div>
                            {/*Draver end*/}
                        </SwipeableDrawer>
                    </div>
                    {/*<div className={classes.navLinks}>*/}
                    {/*    <Button*/}
                    {/*        className={classes.buttonStyles}*/}
                    {/*        ref={anchorRef}*/}
                    {/*        aria-controls={open ? 'menu-list-grow' : undefined}*/}
                    {/*        aria-haspopup="true"*/}
                    {/*        onClick={handleToggle}*/}
                    {/*    >*/}
                    {/*        Gallery*/}
                    {/*    </Button>*/}
                    {/*    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>*/}
                    {/*        {({TransitionProps, placement}) => (*/}
                    {/*            <Grow*/}
                    {/*                {...TransitionProps}*/}
                    {/*                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}*/}
                    {/*            >*/}
                    {/*                <Paper>*/}
                    {/*                    <ClickAwayListener onClickAway={handleClose}>*/}
                    {/*                        <MenuList autoFocusItem={open} id="menu-list-grow"*/}
                    {/*                                  onKeyDown={handleListKeyDown}>*/}
                    {/*                            <MenuItem>*/}
                    {/*                                <NavLink className={classes.anchorLink}*/}
                    {/*                                         to="/gallery/single">*/}
                    {/*                                    Одинарні*/}
                    {/*                                </NavLink>*/}
                    {/*                            </MenuItem>*/}
                    {/*                            <MenuItem>*/}
                    {/*                                <NavLink className={classes.anchorLink}*/}
                    {/*                                         to="/gallery/double">*/}
                    {/*                                    Подвійні*/}
                    {/*                                </NavLink>*/}
                    {/*                            </MenuItem>*/}
                    {/*                            /!*<MenuItem onClick={handleClose}>Logout</MenuItem>*!/*/}
                    {/*                        </MenuList>*/}
                    {/*                    </ClickAwayListener>*/}
                    {/*                </Paper>*/}
                    {/*            </Grow>*/}
                    {/*        )}*/}
                    {/*    </Popper>*/}
                    {/*   */}
                    {/*    <Button className={classes.buttonStyles} color="primary">*/}
                    {/*        <NavLink className={classes.link} to="/gallery">Gallery</NavLink>*/}
                    {/*    </Button>*/}
                    {/*    <Button className={classes.buttonStyles} color="primary">*/}
                    {/*        <NavLink className={classes.link} to="/">main</NavLink>*/}
                    {/*    </Button>*/}
                    {/*    <Button className={classes.buttonStyles} color="primary">*/}
                    {/*        <NavLink className={classes.link} to={'/articles'}>articles</NavLink>*/}
                    {/*    </Button>*/}
                    {/*    /!*<Button  color="primary">*!/*/}
                    {/*    /!*    <NavLink className={classes.link} to={'/login'}>login</NavLink>*!/*/}
                    {/*    /!*</Button>*!/*/}
                    {/*</div>*/}

                </Toolbar>
            </AppBar>

        </div>
    </>);
};


export default ResponsiveAppBar;