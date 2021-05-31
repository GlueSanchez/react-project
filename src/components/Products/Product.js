import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,

    },
    wrapper: {
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            boxShadow: '0 2px 35px 14px rgba(13, 13, 13, 0.05)'
        },
    },
    gridWrapper: {

        display: 'flex',
        justifyContent: 'center',
    },
    media: {
        display: 'flex',
        justifyContent: 'center'
    },
    text:{
        textAlign: 'center'
    },
}));
const Product = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12} md={4} lg={3}
              className={classes.gridWrapper}
        >
            {/*<Box display={'flex'} justifyContent="center">*/}
            {/*   <img src={props.img}*/}
            {/*        style={{objectFit: 'cover'}}*/}
            {/*        alt=""*/}
            {/*        width={300}*/}
            {/*        height={400}*/}
            {/*        />*/}
            {/*        <Typography>*/}
            {/*            {props.text}*/}
            {/*        </Typography>*/}
            {/*</Box>*/}
            <div className={classes.wrapper}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media}>
                            <img src={props.img}
                                 style={{objectFit: 'cover'}}
                                 alt=""
                                 width={300}
                                 height={400}
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                                {props.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </div>
        </Grid>
    );
};

export default Product;


