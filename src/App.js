import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Articles from "./components/Articles/Articles";
import FullArticle from "./components/Articles/FullArticle/FullArticle";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import GalleryOnce from "./components/Gallery/GalleryOnce/GalleryOnce";
import {Container} from "@material-ui/core";
import User_Page from "./components/User_page/User_Page";
import Admin from "./components/Admin/Admin";
import Switch from "react-bootstrap/Switch";

const App = () => {
    return (
        <BrowserRouter>
                        <Route exact path='/admin' component={Admin}/>
                        <Route exact path='/' component={User_Page}/>

</BrowserRouter>

    );
}

export default App;


