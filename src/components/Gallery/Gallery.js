import React from 'react';

import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'
import {makeStyles} from "@material-ui/core/styles";
// import example from './../../assets/images/example.jpg';
// import example2 from './../../assets/images/example2.jpg';
import { Container, Grid} from "@material-ui/core";

// const images = [
//     {image: example},
//     {image: example2},
//     {image: 'https://picsum.photos/200/300'},
//     {image: 'https://picsum.photos/200/320'},
//     {image: 'https://picsum.photos/200/303'},
//     {image: 'https://picsum.photos/200/304'},
//     {image: 'https://picsum.photos/200/305'},
//     {image: 'https://picsum.photos/200/306'},
//     {image: 'https://picsum.photos/350/308'}
// ];
const useStyles = makeStyles((theme) => ({
    image: {
        position: 'relative'
    },
    imageText: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        color: 'white',
        backgroundColor: 'black',
        padding: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));
const options = {
    thumbnails: {
        showThumbnails: true,
    },
    settings: {
        disablePanzoom: true,
        disableWheelControls: true,
    }
};
const Gallery = () => {
    const classes = useStyles();

    return (
        <Container>
            <SimpleReactLightbox>
                <SRLWrapper options={options}>
                    <div className="content">
                        <Grid justify="flex-start"
                              alignItems="flex-start" container spacing={5}>

                            {/*{images.map(img => (*/}
                            {/*    <Grid item*/}
                            {/*          xs={12} sm={6} md={4} lg={3}*/}
                            {/*          className={'col-image-half'}>*/}
                            {/*        <Box display={'flex'} justifyContent="center">*/}
                            {/*            <Box className={classes.image} >*/}
                            {/*                <Image src={img.image} alt="#1"/>*/}
                            {/*                <div className={classes.imageText}>#1</div>*/}
                            {/*            </Box>*/}
                            {/*        </Box>*/}

                            {/*    </Grid>*/}
                            {/*))}*/}
                        </Grid>

                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </Container>
    );
}

export default Gallery;