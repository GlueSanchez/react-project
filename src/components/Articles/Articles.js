import React, {useEffect, useState} from 'react';
import SmallArticle from "./Article/SmallArticle";
import {Card, CardContent, createStyles, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import {useSelector} from "react-redux";

const axios = require('axios');
const useStyles = makeStyles(theme =>
    createStyles({
        articleBlock: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
        },
        mainBox: {
            maxWidth: '30%',
            width: '100%',
            margin: '5px',


        },
        articlesBox: {
            width: '100%',
            margin: '5px',

        }
    }),
);

function ListItemLink(props) {
    return <ListItem button component="NavLink" {...props} />;
}


const Articles = () => {
    const classes = useStyles();
    // const articles = useSelector(state => state.articles);
    const [article, setArticle] = useState([]);
    useEffect(() => {

        fetch('https://pmgranit.com.ua/api/article',
            {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Credentials': true
                }
            })
            .then(response => response.json())
            .then(response => console.log(response))
            // .then(data => setArticle((prevState) => [...prevState, ...data]))
            .catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });
    }, [])


    return (
        <div className={classes.articleBlock}>
            <Card className={classes.mainBox}>
                <CardContent>
                    <List component="nav" aria-label="secondary mailbox folders">
                        {article ?
                            article.map(item => (
                                <ListItemLink href={`/articles/${item.idArticle}`}>
                                    <ListItemText primary={item.title}/>
                                </ListItemLink>
                            ))
                            : ''}

                    </List>
                </CardContent>
            </Card>
            <Card className={classes.articlesBox}>
                {article ?
                    article.map(item =>
                        <SmallArticle title={item.title}
                                      text={item.contents}
                                      id={item.idArticle}
                                      img={item.pathFull}/>)
                    : 'loading'
                }
            </Card>

        </div>
    );
};

export default Articles;
