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
                padding: '11px',
                flexDirection: 'column',
            }
        },
        icons:{
            color: 'white'
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

    return (
        <div className={classes.footer}>

            <div className={c.footerLogo}>
                <img
                    src={logo}
                    href={'/'}
                    height={50}
                    alt="logo"/>
            </div>

            <div className={classes.footerLinks}>

                <a className={classes.footerLink} href="https://www.facebook.com/granit.mlynyska/"
                   target="_blank">
                    <FacebookIcon fontSize="large" className={classes.icons}/>
                </a>
                <a className={classes.footerLink} href="https://google.com"
                   target="_blank">
                    <TelegramIcon fontSize="large" className={classes.icons}/>
                </a>

                <a className={classes.footerLink} href="https://google.com"
                   target="_blank">
                    <PhoneIcon fontSize="large" className={classes.icons}/>
                </a>
                <a className={classes.footerLink} href="https://google.com"
                   target="_blank">
                    <EmailIcon fontSize="large" className={classes.icons}/>
                </a>

            </div>

        </div>
    );

};

export default Footer;
