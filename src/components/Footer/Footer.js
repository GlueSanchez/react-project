import React from "react";
import c from './Footer.module.css';
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
// faExternalLinkSquareAlt

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className={c.footerBox}>
            <div className={c.footerLogo}>Logo</div>
            <div className={c.footerLinks}>
                <div className={c.row}>
                    <div className={c.column}>
                        <a href="https://google.com"><FontAwesomeIcon className={c.link} icon={faExternalLinkAlt}/></a>
                        <a href="https://google.com"><FontAwesomeIcon className={c.link} icon={faExternalLinkAlt}/></a>
                    </div>
                    <div className={c.column}>
                        <a href="https://google.com"><FontAwesomeIcon className={c.link} icon={faExternalLinkAlt}/></a>
                        <a href="https://google.com"><FontAwesomeIcon className={c.link} icon={faExternalLinkAlt}/></a>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Footer;
