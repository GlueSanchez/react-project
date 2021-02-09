import React from 'react';
import c from "../Gallery.module.css";

const GalleryItem = (props) => {
    const handleClick = (e) => {

        e.target.lastElementChild.style.display = 'flex';
    }
    const handle = (e) => {
        let none = 'none';
        e.target.style.display = none;
    }
    return (
        <div className={c.galleryItem}
             onClick={handleClick}
             style={{backgroundImage: `url('https://lh3.googleusercontent.com/proxy/VP-9jP0n0XxBlc_PMwXxxuBNUlBmbF2TkNxXbCo2t1kK8w5EXoOIJDHo_q_DdYKIX6gkeymwnJgz-IOCu0CWOv3ITOQHtv2RRjkzD0gflvGd')`}}>
            <span className={c.galleryItemNumber}>1</span>
            <div className={c.modal}
                 onClick={handle}>12
            </div>
        </div>
    );
}

export default GalleryItem;