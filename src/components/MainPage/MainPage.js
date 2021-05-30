import React from 'react';
import ProductsFilter from "../Products/ProductsFilter";
import Products from "../Products/Products";
import Contacts from "../Contacts/Contacts";
import AboutContainer from "../Header/About/AboutComponent";
import AboutBox from "../Header/AboutBox/AboutBox";


const MainPage = () => {
    return (
        <>
            <AboutContainer/>
            <AboutBox/>
            <ProductsFilter/>
            <Products/>
            <Contacts/>
        </>
    );
}

export default MainPage;