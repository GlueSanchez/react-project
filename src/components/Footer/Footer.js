import React from "react";
import c from './Footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import logo from "../../assets/images/logo.png";
import {Backdrop, Button, createStyles, Fade, makeStyles, Modal} from "@material-ui/core";
// import {Theme} from '@material-ui/core/styles';
import Login from "../Login/Login";

const useStyles = makeStyles(theme =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        loginBox: {
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '500px'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#322c29',
            padding: '20px',
            flexDirection: 'row',
            [theme.breakpoints.down('xs')]: {
                padding: '10px',
                flexDirection: 'column',
            }
        },
        footerLinks: {
            [theme.breakpoints.down('xs')]: {}
        },
        footerLink: {
            [theme.breakpoints.down('xs')]: {
                padding: '0 5px ',
            }
        },
    }),
);
const Footer = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.footer}>

            <div className={c.footerLogo}>
                <img
                    src={logo}
                    href={'/'}
                    height={50}
                    alt="logo"/>
            </div>
            <div>
                <Button onClick={handleOpen}>
                    Login
                </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Login/>
                    </Fade>
                </Modal>
            </div>
            <div className={classes.footerLinks}>

                <a className={classes.footerLink} href="https://www.facebook.com/granit.mlynyska/"
                   target="_blank">
                    <FacebookIcon fontSize="large"/>
                </a>
                <a className={classes.footerLink} href="https://google.com"
                   target="_blank">
                    <TelegramIcon fontSize="large"/>
                </a>

                <a className={classes.footerLink} href="https://google.com"
                   target="_blank">
                    <PhoneIcon fontSize="large"/>
                </a>
                <a className={classes.footerLink} href="https://google.com"
                   target="_blank">
                    <EmailIcon fontSize="large"/>
                </a>

            </div>

        </div>
    );

};

export default Footer;
