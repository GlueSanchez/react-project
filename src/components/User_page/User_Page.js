import React from 'react';
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import {Fab, makeStyles, Toolbar, useScrollTrigger, Zoom} from "@material-ui/core";
import Articles from "../Articles/Articles";
import FullArticle from "../Articles/FullArticle/FullArticle";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import {Route} from "react-router-dom";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import GallerySingle from "../Gallery/GallerySingle";
import GalleryDouble from "../Gallery/GalleryDouble";
import GalleryElite from "../Gallery/GalleryElite";

// Стилі
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(15),
        right: theme.spacing(2),
    },
    content: {
        flex: '1 0 auto',
    },
    footer: {
        flexShrink: '0',
    },
    main: {
        [theme.breakpoints.up('lg')]: {
            marginTop: '25px'
        }
    }
}));

// Функція для підняття сторінки вгору
function ScrollTop(props) {
    const {children, window} = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
// Функція при натисканні на кнопку "Вгору"
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };
// Розмітка кнопки "Вгору"User_Page
    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

// Сторінка користувача
const User_Page = (props) => {
    const classes = useStyles();
    return (<>
            <div className={classes.content}>
                <Header/>
                <Toolbar id="back-to-top-anchor"/>
                <main className={classes.main}>
                    {/*Маршрути*/}
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/articles' component={Articles}/>
                    <Route path='/articles/:id' component={FullArticle}/>
                    {/*<Route exact path='/gallery' component={Gallery}/>*/}
                    <Route path='/gallery/single' component={GallerySingle}/>
                    <Route path='/gallery/double' component={GalleryDouble}/>
                    <Route path='/gallery/elite' component={GalleryElite}/>
                    <Route component={MainPage}/>
                    {/*Кнопка "Вгору"*/}
                    <ScrollTop {...props}>
                        <Fab color="secondary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon/>
                        </Fab>
                    </ScrollTop>
                </main>
            </div>
            <div className={classes.footer}>
                <Footer/>
            </div>

        </>
    );
};

export default User_Page;