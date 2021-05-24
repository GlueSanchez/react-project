import React from 'react';
import c from "../About/AboutComponent.module.css";
import {Button} from "react-bootstrap";
import diagranit from "../../../assets/images/diagranit-1.jpg";

const AboutBox = () => {
    return (
        <div className={c.aboutWrapper}>
            і
            <div className={c.text}>
                <h1>Про нас</h1>
                <p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis corporis cum delectus dignissimos dolorum eligendi eveniet ex iure laborum magni minima modi, mollitia nemo non, nostrum omnis quidem veritatis?</span><span>A accusamus aliquam atque commodi cumque delectus distinctio dolores eveniet facere fugiat ipsa ipsam itaque laborum modi nisi nulla pariatur perspiciatis praesentium provident qui, quis rem rerum unde voluptate voluptatibus.
                    </span>
                </p>
                <Button className={c.button}>Learn more</Button>
            </div>
            <div className={c.photo}>
                <img src={diagranit}
                     height={500}
                     width={500}/>
            </div>
        </div>
    );
};

export default AboutBox;
