import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Route, BrowserRouter, useLocation} from 'react-router-dom';
import User_Page from "./components/User_page/User_Page";
import Admin from "./components/Admin/Admin";



const App = () => {
    let location = useLocation();
    console.log(location)
    return (
       <>
            <Route path='/admin' component={Admin}/>
            <Route
                render={({location} ) => ['/admin', '/admin/workers' ].includes(location.pathname)
                    ? null
                    : <User_Page/>
                }
            />
       </>

    );
};

export default App;


