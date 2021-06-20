import c from './../Articles.module.css';
import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    bigArticleBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    bigArticleImg: {
        objectFit: 'cover',
        maxWidth: '700px',
        padding: '10px'
    },
    bigArticleTitle: {},
    bigArticleText: {
        padding: '5px 15px'
    },
});
const BigArticle = (props) => {
    const classes = useStyles();
    const [article, setArticle] = useState();
    useEffect(() => {
        fetch(`https://localhost:44352/api/home/ArticlSearch?id=${props.id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => setArticle(...data))
            .catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });
    }, [])


    return (


        article
            ?
            <CardContent className={classes.bigArticleBlock}>
                <div className={classes.bigArticleTitle}>
                    { article.title}
                </div>
                <img className={classes.bigArticleImg} src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" alt="" />

                <div className={classes.bigArticleText}>
                    {article.contents}
                </div>
            </CardContent >

            : 'loading'
    );
};

export default BigArticle;