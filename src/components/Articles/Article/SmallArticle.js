import React from 'react';
import c from './../Articles.module.css';
import { NavLink } from "react-router-dom";
import ShowMoreText from 'react-show-more-text';
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
    createStyles({
        smallArticle: {
            padding: '10px',
            transition: 'box-shadow .3s',
            borderRadius: '10px',

            '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'

            },
        },
        smallArticleBlock: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        articleLink: {
            color: 'black',
            '&:hover': {
                color: 'black',
                textDecoration: 'none'
            }
        },
        smallArticleImg: {
            maxWidth: '300px',
            objectFit: 'cover',
        },
        smallArticleContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        smallArticleTitle: {
            padding: '10px'
        },
        smallArticleText: {
            padding: '10px'
        },
    }),
);

const SmallArticle = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.smallArticle} key={ props.id}>
            <NavLink className={classes.articleLink} to={`/articles/${props.id}`}>
                <div className={classes.smallArticleBlock}>
                    <img className={classes.smallArticleImg}
                         src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" alt="" />
                    <div className={classes.smallArticleContent}>

                        <div className={classes.smallArticleTitle}>
                            {props.title}
                        </div>
                        <div className={classes.smallArticleText}>
                            <ShowMoreText
                                lines={2}
                                more='Read more'
                                less='Show less'
                                className='content-css'
                                anchorClass='my-anchor-css-class'
                                expanded={false}>
                                { props.text}
                            </ShowMoreText>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default SmallArticle;