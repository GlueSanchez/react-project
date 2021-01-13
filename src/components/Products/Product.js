import React from 'react';
import c from './Product.module.css';

const Product = (props) => {
    return (
        <div className={c.block}>
            <img src="https://kotula.com.ua/media/2020/12/%D0%91%D1%96%D0%BB%D0%B0-1024x748.jpg?v=1609415253"
                 alt=""
                 width={200}
                 height={200}/>

        </div>
    );
};

export default Product;