import React from 'react';
import diagranit from "../../../assets/images/diagranit-1.jpg";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, Hidden, Typography} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
    aboutWrapper: {
        backgroundColor: '#342d2b',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '25px'
    },
    textBox: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minWidth: '250px',
        maxWidth: '500x',
        width: '100%',
        height: '100%',
    },
    textColor: {
        color: 'white',
        marginBottom: '20px',

    },
    photoBox: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    photo: {
        minWidth: '300px',
        maxWidth: '500px',
        width: '100%',
        height: 'auto',
    },
    buttonStyles: {
        color: 'white',
        border: '1px solid white',
        borderRadius: '30px',
    }
}));

const AboutBox = () => {
    const classes = useStyles();
    return (
        <div className={classes.aboutWrapper}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={6}>
                    <div className={classes.textBox}>
                        <Typography className={classes.textColor} variant={'h3'}>Про нас</Typography>
                        <Typography className={classes.textColor} variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis corporis cum
                            delectus
                            dignissimos dolorum eligendi eveniet ex iure laborum magni minima modi, mollitia nemo non,
                            nostrum
                            omnis quidem veritatis?
                            A accusamus aliquam atque commodi cumque delectus distinctio dolores eveniet facere fugiat
                            ipsa
                            ipsam itaque laborum modi nisi nulla pariatur perspiciatis praesentium provident qui, quis
                            rem rerum
                            unde voluptate voluptatibus.
                        </Typography>
                        <div >
                            <Button className={classes.buttonStyles} >Дізнатися більше</Button>
                        </div>
                    </div>
                </Grid>
                <Hidden only={['md', 'sm', 'xs']}>
                <Grid item xs={6}>
                    <div className={classes.photoBox}>
                        <img className={classes.photo} src={diagranit}/>
                    </div>
                </Grid>
            </Hidden>
            </Grid>
        </div>
    );
};

export default withWidth()(AboutBox);