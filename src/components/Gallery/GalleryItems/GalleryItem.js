import React from 'react';
import c from "../Gallery.module.css";

const GalleryItem = (props) => {

    const handleClick = () => {
        props.getIndexOfCurrentImg(props.id);
    }
    return (
        <div className={c.galleryItem}
             onClick={handleClick}
             style={{backgroundImage: `url('https://wgntv.com/wp-content/uploads/sites/5/2018/08/gettyimages-1006480588-1.jpg?w=760')`}}>
            <span className={c.galleryItemNumber}>{props.id}</span>

        </div>
    );
}

export default GalleryItem;