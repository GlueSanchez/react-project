import React from "react";
import c from './Contacts.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt, faEnvelope, faUsers} from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {

    return (
        <div>
            <div className={c.contactsTitle}>
                Let's connect
            </div>
            <div className={c.contactsBlocks}>
                <div className={c.contactsBlock}>
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    Adress
                    <div className={c.contactsBlockText}>
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
                <div className={c.contactsBlock}>
                    <FontAwesomeIcon icon={faPhoneAlt}/>
                    Contacts
                    <div className={c.contactsBlockText}>
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
                <div className={c.contactsBlock}>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    E-Mail
                    <div className={c.contactsBlockText}>
                        Lorem ipsum dolor sit amet
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
        </div>
    );

};
export default Contacts;
