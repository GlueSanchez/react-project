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

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={MainPage}/>
            <div className='mainContainer'>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/articles' component={Articles}/>
                <Route path='/articles/:id' component={FullArticle}/>
                <Route path='/gallery' component={Gallery}/>
            </div>
            <Footer/>
        </BrowserRouter>

    );
}

export default App;


