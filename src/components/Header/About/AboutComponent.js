import React from "react";
import background from './../../../assets/images/backgroundAbout.jpg';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundImage: `url('${background}')`,
        width: '100%',
        height: 'calc(100vh - 25px)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    },
}));

const AboutContainer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.paperContainer}>
        </div>
    );
};


export default AboutContainer;


