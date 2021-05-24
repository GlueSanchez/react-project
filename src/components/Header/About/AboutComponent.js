import React from "react";
import {Button} from "react-bootstrap";
import c from './AboutComponent.module.css';
import background from './../../../assets/images/backgroundAbout.jpg';
import diagranit from './../../../assets/images/diagranit-1.jpg';
const AboutContainer = (props) => {
    return (
        <>
            <div className={c.aboutContainer} style={{backgroundImage: `url('${background}')`}}>

            </div>
        </>

    );
};


export default AboutContainer;


