import React, {useState} from 'react';
import c from './Gallery.module.css';
import GalleryItem from "./GalleryItems/GalleryItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useSwipeable} from "react-swipeable";
import {Col, Image, Row} from "react-bootstrap";
import {faArrowLeft, faArrowRight, faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'

const images = [
    {image: 'https://picsum.photos/200/300'},
    {image: 'https://picsum.photos/200/320'},
    {image: 'https://picsum.photos/200/303'},
    {image: 'https://picsum.photos/200/304'},
    {image: 'https://picsum.photos/200/305'},
    {image: 'https://picsum.photos/200/306'},
    {image: 'https://picsum.photos/350/308'}
];


const Gallery = (props) => {
    // const [currentImg, setCurrentImg] = useState({
    //     photoIndex: 0,
    //     isOpen: false
    // });
    // const handlers = useSwipeable({
    //     onSwipedLeft: () => changeImgToPrevious(),
    //     onSwipedRight: () => changeImgToNext(),
    //     preventDefaultTouchmoveEvent: true,
    //     trackMouse: true
    // });


    // const getIndexOfCurrentImg = (index) => {
    //     setCurrentImg(prevState => ({...prevState, isOpen: true, photoIndex: index}));
    // }
    // const closeModal = (e) => {
    //     setCurrentImg(prevState => ({...prevState, isOpen: false}));
    // }
    // const changeImgToPrevious = (e) => {
    //     setCurrentImg(prevState => ({...prevState, photoIndex: currentImg.photoIndex - 1}));
    // }
    // const changeImgToNext = (e) => {
    //     setCurrentImg(prevState => ({...prevState, photoIndex: currentImg.photoIndex + 1}));
    // }

    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                <div className="content">
                    <div className="row">

                {images.map(img => (
                    <div className="col-md-3 col-12 col-image-half">
                        <Image src={img.image}/>
                    </div>
                ))}
                    </div>
                </div>
            </SRLWrapper>
            {/*<div {...handlers}>*/}
            {/*    <div className={c.galleryWrapper}>*/}
            {/*        <div className={c.galleryTitle}>Gallery</div>*/}
            {/*        {currentImg.isOpen ?*/}
            {/*            <div className={c.modal}>*/}
            {/*                <TransitionGroup>*/}
            {/*                    <CSSTransition*/}
            {/*                        key={currentImg.photoIndex}*/}
            {/*                        timeout={300}*/}
            {/*                        classNames='example'>*/}
            {/*                        <GalleryItem id={currentImg.photoIndex}*/}
            {/*                                     photo={images[currentImg.photoIndex]}/>*/}
            {/*                    </CSSTransition>*/}
            {/*                </TransitionGroup>*/}
            {/*                <button className={c.btn + ' ' + c.prevArrow + ' ' + c.arrow} onClick={changeImgToPrevious}>*/}
            {/*                    <FontAwesomeIcon icon={faArrowLeft}/>*/}
            {/*                </button>*/}
            {/*                <button className={c.btn + ' ' + c.nextArrow + ' ' + c.arrow} onClick={changeImgToNext}>*/}
            {/*                    <FontAwesomeIcon icon={faArrowRight}/>*/}
            {/*                </button>*/}
            {/*                <button className={c.btn + ' ' + c.close} onClick={closeModal}>*/}
            {/*                    <FontAwesomeIcon icon={faTimes}/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            : <></>}*/}
            {/*        <div className={c.galleryItems}>*/}
            {/*            {images.map((slide, index) => (*/}
            {/*                <img src={slide.image}*/}
            {/*                     className={c.galleryItem}*/}
            {/*                     onClick={() => {*/}
            {/*                         getIndexOfCurrentImg(index);*/}
            {/*                     }}/>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </SimpleReactLightbox>
    );
}

export default Gallery;