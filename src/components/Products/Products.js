import React from 'react';
import c from './Product.module.css';
import Product from "./Product";
import {Grid} from "@material-ui/core";
// import single from './../../assets/images/Img/Single/Mini/om1.jpg';
// import double from './../../assets/images/Img/Dual/Mini/dm1.jpg';
// import elite from './../../assets/images/Img/Dual/Mini/dm79.jpg';
const Products = () => {
    return (
        <div className={c.wrapper}>
            <Grid justify="center"
                  alignItems="center" container>
                <Product img={'https://memory.com.ua/img/upload-files/products/1_YYYY.jpg'} text={'Одинарні'}/>
                <Product img={'https://memory.com.ua/img/upload-files/products/1_YYYY.jpg'} text={'Подвійні'}/>
                <Product img={'https://memory.com.ua/img/upload-files/products/1_YYYY.jpg'} text={'Елітні'}/>
            </Grid>

        </div>
    );
};

export default Products;
