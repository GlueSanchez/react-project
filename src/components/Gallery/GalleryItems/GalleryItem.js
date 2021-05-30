import React from 'react';
import c from "../Gallery.module.css";
import {Image} from "react-bootstrap";

const GalleryItem = (props) => {

    return (
        <div className={c.item}>
            <div className={c.itemWrapper}>
                <Image className={c.image + ' ' + c.active}
                     src={props.photo.image}
                       fluid/>
                <span className={c.galleryItemNumber}>{props.id}</span>
           </div>
        </div>
    );
}

export default GalleryItem;