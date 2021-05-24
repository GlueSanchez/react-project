import React, {useState} from 'react';
import c from './Gallery.module.css';
import GalleryItem from "./GalleryItems/GalleryItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useSwipeable} from "react-swipeable";
import {Col, Image, Row} from "react-bootstrap";
import {faArrowLeft, faArrowRight, faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'
import {makeStyles} from "@material-ui/core/styles";

const images = [
    {image: 'https://picsum.photos/200/300'},
    {image: 'https://picsum.photos/200/320'},
    {image: 'https://picsum.photos/200/303'},
    {image: 'https://picsum.photos/200/304'},
    {image: 'https://picsum.photos/200/305'},
    {image: 'https://picsum.photos/200/306'},
    {image: 'https://picsum.photos/350/308'}
];
const useStyles = makeStyles((theme) => ({
    image: {
        position: 'relative'
    },
    imageText: {
        position: 'absolute',
        left: '15px',
        bottom: 0,
        height: '25px',
        width: '25px',
        color: 'white',
        backgroundColor: 'black',
        padding: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));
const options = {
    // Please note that "caption" is singular
    caption: {
        captionAlignment: 'start',
        captionColor: '#FFFFFF',
        captionContainerPadding: '0',
        captionFontFamily: 'inherit',
        captionFontSize: 'inherit',
        captionFontStyle: 'inherit',
        captionFontWeight: 'inherit',
        captionTextTransform: 'inherit',
        showCaption: true
    }
};
const Gallery = (props) => {
    const classes = useStyles();

    return (
        <SimpleReactLightbox>
            <SRLWrapper options={options}>
                <div className="content">
                    <div className="row">
                        {images.map(img => (
                            <div className="col-md-3 col-12 col-image-half">
                                <Image className={classes.image} src={img.image} alt="#1"/>
                                <div className={classes.imageText}>#1</div>
                            </div>
                        ))}
                    </div>
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    );
}

export default Gallery;