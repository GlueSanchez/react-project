import React from 'react';
import {Form} from "react-bootstrap";
import c from  './ProductsComponent.module.css';
function ProductsComponent(props) {

    return (
        <div>
            <div className={c.block}>

                <h2>FEATURED PRODUCTS</h2>
                <Form>

                            <Form.Check inline
                                        type='radio'
                                        name={'radioBox'}
                                        label="Men" id={`inline-radio-1`}/>
                            <Form.Check inline
                                        type='radio'
                                        name={'radioBox'}
                                        label="Woomen" id={`inline-radio-2`}/>
                            <Form.Check inline
                                        type='radio'
                                        name={'radioBox'}
                                        label="uniSEX" id={`inline-radio-3`}/>

                </Form>

            </div>
        </div>
    );
}

export default ProductsComponent;