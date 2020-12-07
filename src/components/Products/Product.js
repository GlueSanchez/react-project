import React from 'react';
import c from './Product.module.css';

const Product = (props) => {
    return (
        <div className={c.block}>
            <img src="https://pbs.twimg.com/media/DiHYZjOVAAA95Yc.jpg"
                 alt=""
                 width={75}
                 height={75}/>
            <span className={c.title}>Old Skool Shoes</span>
            <span className={c.price}> $59.99</span>
        </div>
    );
};

export default Product;