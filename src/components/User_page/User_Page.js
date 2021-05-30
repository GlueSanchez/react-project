import React from 'react';
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import { Fab, makeStyles, Toolbar, useScrollTrigger, Zoom} from "@material-ui/core";
import Articles from "../Articles/Articles";
import FullArticle from "../Articles/FullArticle/FullArticle";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import {Route} from "react-router-dom";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import GallerySingle from "../Gallery/GallerySingle";
import GalleryDouble from "../Gallery/GalleryDouble";
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(15),
        right: theme.spacing(2),
    },
    main:{
        marginTop: '20px',
    }
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const Products = (props) => {
    const classes = useStyles();
    return (<>
            <Header/>
            <Toolbar id="back-to-top-anchor" />
            <main className={classes.main}>
               <Route exact path='/' component={MainPage}/>
               {/*<Route exact path='/login' component={Login}/>*/}
               <Route exact path='/articles' component={Articles}/>
               <Route path='/articles/:id' component={FullArticle}/>
               <Route exact path='/gallery' component={Gallery}/>
               <Route path='/gallery/single' component={GallerySingle}/>
                <Route path='/gallery/double' component={GalleryDouble}/>

            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            </main>
            <Footer/>
        </>
    );
};

export default Products;