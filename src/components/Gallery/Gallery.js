import React, {useState} from 'react';
import c from './Gallery.module.css';
import GalleryItem from "./GalleryItems/GalleryItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { useSwipeable } from "react-swipeable";
const images = [
    {image: 'https://picsum.photos/200/300'},
    {image: 'https://picsum.photos/200/320'},
    {image: 'https://picsum.photos/200/303'},
    {image: 'https://picsum.photos/200/304'},
    {image: 'https://picsum.photos/200/305'},
    {image: 'https://picsum.photos/200/306'},
    {image: 'https://picsum.photos/200/308'}
];


const Gallery = (props) => {
    const [currentImg, setCurrentImg] = useState({
        photoIndex: 0,
        isOpen: false
    });
    const handlers = useSwipeable({
        onSwipedLeft: () => changeImgToPrevious(),
        onSwipedRight: () => changeImgToNext(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });


    const getIndexOfCurrentImg = (index) => {
        setCurrentImg(prevState => ({...prevState, isOpen: true, photoIndex: index}));
    }
    const closeModal = (e) => {
        setCurrentImg(prevState => ({...prevState, isOpen: false}));
    }
    const changeImgToPrevious = (e) => {
        setCurrentImg(prevState => ({...prevState, photoIndex: currentImg.photoIndex - 1}));
    }
    const changeImgToNext = (e) => {
        setCurrentImg(prevState => ({...prevState, photoIndex: currentImg.photoIndex + 1}));
    }

    return (
        <div {...handlers}>
            <div className={c.galleryWrapper}>
                <div className={c.galleryTitle}>Gallery</div>
                {currentImg.isOpen ?
                <div className={c.modal}>
                    <TransitionGroup>
                        <CSSTransition
                            key={currentImg.photoIndex}
                            timeout={300}
                            classNames='example'>
                            <GalleryItem id={currentImg.photoIndex}
                                         photo={images[currentImg.photoIndex]}/>
                        </CSSTransition>
                    </TransitionGroup>
                    <button className={c.arrow + ' ' + c.prevArrow} onClick={changeImgToPrevious}> {'<'} </button>
                    <button className={c.arrow + ' ' + c.nextArrow} onClick={changeImgToNext}> ></button>
                    <button className={c.arrow + ' ' + c.close} onClick={closeModal}>Close</button>
                </div>
                : <></>}
                <div className={c.galleryItems}>
                    {images.map((slide, index) => (
                        <img src={slide.image}
                             onClick={() => {
                                 getIndexOfCurrentImg(index);
                             }}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;