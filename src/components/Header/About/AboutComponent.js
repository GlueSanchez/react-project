import React from "react";
import {Button} from "react-bootstrap";
import c from './AboutComponent.module.css';
import background from './../../../assets/images/backgroundAbout.jpg';
const AboutContainer = (props) => {
    return (
        <>
            <div className={c.aboutContainer} style={{backgroundImage: `url('${background}')`}}>
               <div className={c.aboutWrapper}>
                   <h1>PEPE LAUGHT</h1>
                   <p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis corporis cum delectus dignissimos dolorum eligendi eveniet ex iure laborum magni minima modi, mollitia nemo non, nostrum omnis quidem veritatis?</span><span>A accusamus aliquam atque commodi cumque delectus distinctio dolores eveniet facere fugiat ipsa ipsam itaque laborum modi nisi nulla pariatur perspiciatis praesentium provident qui, quis rem rerum unde voluptate voluptatibus.
                    </span>
                   </p>
                   <Button className={c.button}>Learn more</Button>
               </div>
            </div>
        </>

    );
};


export default AboutContainer;


