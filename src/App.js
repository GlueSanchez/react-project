import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./components/Header/Header";
import {Route, BrowserRouter} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import Gallery from "./components/Gallery/Gallery";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import FullArticle from "./components/Articles/FullArticle/FullArticle";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className='mainContainer'>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/articles' component={Articles}/>
                <Route path='/articles/:id' component={FullArticle}/>
                <Route path='/gallery' component={Gallery}/>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;


