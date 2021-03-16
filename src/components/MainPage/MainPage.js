import React from 'react';
import ProductsFilter from "../Products/ProductsFilter";
import Products from "../Products/Products";
import Iframe from "react-iframe";
import Contacts from "../Contacts/Contacts";
import AboutContainer from "../Header/About/AboutComponent";
import {BrowserRouter} from "react-router-dom";


const MainPage = (props) => {
    return (
        <> <AboutContainer/>
            <div className='mainContainer'>

                <ProductsFilter/>
                <Products/>
                       <Contacts/>
            </div>

        </>
    );
}

export default MainPage;