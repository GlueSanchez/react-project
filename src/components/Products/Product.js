import React from 'react';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    gridWrapper:{
        '&:hover':{
            boxShadow: '0 2px 35px 14px rgba(13, 13, 13, 0.05)'
        },
    }
}));
const Product = () => {
    const classes= useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}
              className={classes.gridWrapper}>
            <Box display={'flex'} justifyContent="center">
               <img src="https://kotula.com.ua/media/2020/12/%D0%91%D1%96%D0%BB%D0%B0-1024x748.jpg?v=1609415253"
                    alt=""
                    width={300}
                    />
            </Box>

        </Grid>
    );
};

export default Product;


