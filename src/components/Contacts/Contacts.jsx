import React from "react";
import c from './Contacts.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt, faEnvelope, faUsers} from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";
import {Nav} from "react-bootstrap";

const Contacts = () => {

    return (
        <div className={c.contacts}>
            <div className={c.contactsTitle}>
              <h2>  Let's connect</h2>
            </div>
            <div className={c.contactsBox}>
                <div className={c.contactsBlocks}>
                    <div className={c.contactsBlock}>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        Adress
                        <div className={c.contactsBlockText}>
                            <a href="https://www.google.com/maps?ll=49.315946,24.224936&z=16&t=m&hl=en&gl=UA&mapclient=embed&cid=16114384382516940547"
                               target="_blank">
                                Ivana Franka 8, Mlynys'ka, Lviv Oblast</a>
                        </div>
                    </div>
                    <div className={c.contactsBlock}>
                        <FontAwesomeIcon icon={faPhoneAlt}/>
                        Contacts
                        <div className={c.contactsBlockText}>
                            <a href="tel:+380979271652">+38 (097) 92-71-652</a>
                            <a href="tel:+380668664271">+38 (066) 86-64-271</a>
                        </div>
                    </div>
                    <div className={c.contactsBlock}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        E-Mail
                        <div className={c.contactsBlockText}>
                            <a href="mailto: abc@example.com">abc@example.com</a>
                        </div>
                    </div>
                    <div className={c.contactsBlock}>
                        <FontAwesomeIcon icon={faUsers}/>
                        Representatives
                        <div className={c.contactsBlockText}>
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>
                <div className={c.mapBlock}>
                    <Iframe width={'100%'}
                            height={'500px'}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.912199703771!2d24.22274701569057!3d49.31594637933502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a7ba628310eb9%3A0xdfa1cb37de064f03!2z0J_QsNC8J9GP0YLQvdC40LrQuCDQnNC70LjQvdC40YHRjNC60LA!5e0!3m2!1sen!2sua!4v1607361020325!5m2!1sen!2sua"
                            frameBorder="0" aria-hidden="false"
                            tabIndex="0"></Iframe>
                </div>
            </div>
        </div>
    );

};
export default Contacts;
