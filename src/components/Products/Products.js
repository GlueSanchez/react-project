import React from 'react';
import c from './Product.module.css';
import Product from "./Product";
import { Grid} from "@material-ui/core";

const Products = () => {
    return (
        <div className={c.wrapper}>
            <Grid justify="flex-start"
                  alignItems="flex-start" container >
                <Product/>
                <Product/>
                <Product/>
            </Grid>

        </div>
    );
};

export default Products;
