import React from 'react';
import c from './Gallery.module.css';
import GalleryItem from "./GalleryItems/GalleryItem";
const Gallery = (props) => {
    return (
        <div>
            <div className={c.galleryWrapper}>
                <div className={c.galleryTitle}>Gallery</div>
                <div className={c.galleryItems}>
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                </div>
            </div>
        </div>
    );
}

export default Gallery;