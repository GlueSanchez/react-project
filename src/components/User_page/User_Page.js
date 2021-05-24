import React from 'react';
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import {Container} from "@material-ui/core";
import Login from "../Login/Login";
import Articles from "../Articles/Articles";
import FullArticle from "../Articles/FullArticle/FullArticle";
import Gallery from "../Gallery/Gallery";
import GalleryOnce from "../Gallery/GalleryOnce/GalleryOnce";
import Footer from "../Footer/Footer";
import {Route} from "react-router-dom";

const Products = (props) => {
    return (<>

            <Header/>
            <Route exact path='/' component={MainPage}/>
            <Container >
                <Route exact path='/login' component={Login}/>
                <Route exact path='/articles' component={Articles}/>
                <Route path='/articles/:id' component={FullArticle}/>
                <Route path='/gallery' component={Gallery}/>
                <Route path='/gallery-1' component={GalleryOnce}/>
            </Container>
            <Footer/></>
    );
};

export default Products;