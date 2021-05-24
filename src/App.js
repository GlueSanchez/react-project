import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import User_Page from "./components/User_page/User_Page";
import Admin from "./components/Admin/Admin";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path='/admin' component={Admin}/>
            <Route path='/' component={User_Page}/>
        </BrowserRouter>

    );
}

export default App;


