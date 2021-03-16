import React from 'react';
import c from "../Gallery.module.css";

const GalleryItem = (props) => {

    return (
        <div className={c.item}>
            <span className={c.galleryItemNumber}>{props.id}</span>
            <img className={c.image + ' ' + c.active}
                 src={props.photo.image}/>
        </div>
    );
}

export default GalleryItem;