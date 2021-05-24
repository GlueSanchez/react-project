import React from 'react';
import c from './Product.module.css';
import Product from "./Product";

const Products = (props) => {
    return (
        <div className={c.wrapper}>
            <div className={c.box}>
                <Product/>
                <Product/>

                <Product/>
            </div>
            {/*<div className={c.box}>*/}
            {/*    <Product/>*/}

            {/*    <Product/>*/}
            {/*    <Product/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Products;