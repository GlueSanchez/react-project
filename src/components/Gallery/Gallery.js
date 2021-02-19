import React, {useEffect, useState} from 'react';
import c from './Gallery.module.css';
import GalleryItem from "./GalleryItems/GalleryItem";

const Gallery = (props) => {
    const [currentImg, setCurrentImg] = useState({
        photoIndex: 0,
        isOpen: false
    });
    const getIndexOfCurrentImg = (index) => {
        setCurrentImg(prevState => ({...prevState, isOpen: true, photoIndex: index}));
    }
    const handleClick = () => {
        // setCurrentImg(prevState => ({...prevState, isOpen: false}));
    }

    const closeModal = () => {
        setCurrentImg(prevState => ({...prevState, isOpen: false}));
    }
    const changeImgToPrevious = () => {
        setCurrentImg(prevState => ({...prevState, photoIndex: currentImg.photoIndex - 1}));
    }
    const changeImgToNext = () => {
        setCurrentImg(prevState => ({...prevState, photoIndex: currentImg.photoIndex + 1}));
    }
    useEffect(() => {
        console.log(currentImg)
    })
    return (
        <div>
            <div className={c.galleryWrapper}>
                <div className={c.galleryTitle}>Gallery</div>
                {currentImg.isOpen ?
                    <div className={c.modal}
                         onClick={handleClick}
                         style={{backgroundImage: `url('https://wgntv.com/wp-content/uploads/sites/5/2018/08/gettyimages-1006480588-1.jpg?w=760')`}}>
                        <span className={c.galleryItemNumber}>{currentImg.photoIndex}</span>
                        <button className={c.arrow + ' ' + c.prevArrow} onClick={changeImgToPrevious}> {'<'} </button>
                        <button className={c.arrow + ' ' + c.nextArrow} onClick={changeImgToNext}> ></button>
                        <button className={c.arrow + ' ' + c.close} onClick={closeModal}>Close</button>

                    </div> : <></>}
                <div className={c.galleryItems}>
                    <GalleryItem id={0} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                    <GalleryItem id={1} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                    <GalleryItem id={2} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                    <GalleryItem id={3} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                    <GalleryItem id={4} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                    <GalleryItem id={5} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                    <GalleryItem id={6} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                    <GalleryItem id={7} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                    <GalleryItem id={8} getIndexOfCurrentImg={getIndexOfCurrentImg}/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;