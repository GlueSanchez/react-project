import React from 'react';
import ProductsFilter from "../Products/ProductsFilter";
import Products from "../Products/Products";
import Iframe from "react-iframe";
import Contacts from "../Contacts/Contacts";
import AboutContainer from "../Header/About/AboutComponent";


const MainPage = (props) => {
    return (
        <>
            <AboutContainer />
            <ProductsFilter/>
            <Products/>

            <Iframe width={'100%'}
                    height={'500px'}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.912199703771!2d24.22274701569057!3d49.31594637933502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a7ba628310eb9%3A0xdfa1cb37de064f03!2z0J_QsNC8J9GP0YLQvdC40LrQuCDQnNC70LjQvdC40YHRjNC60LA!5e0!3m2!1sen!2sua!4v1607361020325!5m2!1sen!2sua"
                    frameBorder="0" aria-hidden="false"
                    tabIndex="0"></Iframe>
            <Contacts/>

        </>
    );
}

export default MainPage;