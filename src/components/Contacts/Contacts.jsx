import React from "react";
import c from './Contacts.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt, faEnvelope, faUsers} from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";
import {makeStyles} from "@material-ui/core/styles";
import background from "../../assets/images/backgroundAbout.jpg";
import {Link, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    contactBox: {
        padding: '50px 0',
        margin: '100px 0 0 0 ',
        backgroundColor: '#342d2b',
    },
    textColor: {
        color: 'white',
        fontSize: '16px'
    },
    icons:{
        fontSize: '20px',
        marginBottom: '5px'
    },
    title:{
        fontSize: '24px'
    },
    linkColor: {
        color: 'white',
        '&:hover': {
            color: 'white',
            textDecoration: 'none'
        }
    },
    contactsTitle: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    contactsBox: {
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    contactsBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 5px',
        }
    },
    contactsBlocks: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px',
        },
    },
    mapBlock:{
    width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
}
}));

const Contacts = () => {
    const classes = useStyles();
    return (
        <div className={classes.contactBox} id={'adress'}>
            <div className={classes.contactsTitle}>
                <Typography className={classes.textColor+" "+classes.title} variant={'h4'}>Контакти</Typography>
            </div>
            <div className={classes.contactsBox}>
                <div className={classes.contactsBlocks}>
                    <div className={classes.contactsBlock}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.textColor+' '+classes.icons}/>
                        <Typography className={classes.textColor} variant={'body2'}>
                            Адреса
                        </Typography>
                        <div className={c.contactsBlockText}>
                            <Link className={classes.linkColor}
                                  href="https://www.google.com/maps?ll=49.315946,24.224936&z=16&t=m&hl=en&gl=UA&mapclient=embed&cid=16114384382516940547"
                                  target="_blank">
                               Івана Франка 8, Млиниська, Львівська область</Link>
                        </div>
                    </div>
                    <div className={classes.contactsBlock}>
                        <FontAwesomeIcon icon={faPhoneAlt} className={classes.textColor+' '+classes.icons}/>
                        <Typography className={classes.textColor} variant={'body2'}>
                            Телефон
                        </Typography>
                        <div className={c.contactsBlockText}>
                            <Link className={classes.linkColor} href="tel:+380979271652">+38 (097) 92-71-652</Link>
                            <Link className={classes.linkColor} href="tel:+380668664271">+38 (066) 86-64-271</Link>
                        </div>
                    </div>
                    <div className={classes.contactsBlock}>
                        <FontAwesomeIcon icon={faEnvelope} className={classes.textColor+' '+classes.icons}/>
                        <Typography className={classes.textColor} variant={'body'}>
                            Електронна пошта
                        </Typography>
                        <div className={c.contactsBlockText}>
                            <Link className={classes.linkColor} href="mailto: stepankurinskij@gmail.com">stepankurinskij@gmail.com</Link>
                        </div>
                    </div>
                    {/*<div className={classes.contactsBlock}>*/}
                    {/*    <FontAwesomeIcon icon={faUsers} className={classes.textColor}/>*/}
                    {/*    <Typography className={classes.textColor} variant={'body2'}>*/}
                    {/*        Representatives*/}
                    {/*    </Typography>*/}
                    {/*    <div className={c.contactsBlockText}>*/}
                    {/*        Lorem ipsum dolor sit amet*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className={classes.mapBlock}>
                    <Iframe width={'100%'}
                            height={'500px'}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.912199703771!2d24.22274701569057!3d49.31594637933502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a7ba628310eb9%3A0xdfa1cb37de064f03!2z0J_QsNC8J9GP0YLQvdC40LrQuCDQnNC70LjQvdC40YHRjNC60LA!5e0!3m2!1sen!2sua!4v1607361020325!5m2!1sen!2sua"
                            frameBorder="0" aria-hidden="false"
                            tabIndex="0"></Iframe>
                </div>
            </div>
        </div>
    );

};
export default Contacts;
