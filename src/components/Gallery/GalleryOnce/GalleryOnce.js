import React from 'react';
import c from './GalleryOnce.module.css';
const GalleryOnce = () => {
    return (
        <div className={c.gallery}>
Список галерей
            <div className={c.galleryWrapper}>
                <div className={c.galleryItem}>1</div>
                <div className={c.galleryItem}>2</div>
                <div className={c.galleryItem}>3</div>
            </div>
        </div>
    );
};

export default GalleryOnce;
