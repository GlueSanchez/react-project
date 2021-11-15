import React, { useEffect, useState } from 'react';
import c from './Articles.module.css';
import SmallArticle from "./Article/SmallArticle";
import {Card, CardContent, createStyles, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";

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
    const [article, setArticle] = useState([]);
    useEffect(() => {
        fetch('npm', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => setArticle((prevState) => [...prevState, ...data]))
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
                                    <ListItemText primary={ item.title} />
                                </ListItemLink>
                            ))
                            : ''}

                    </List>
                </CardContent>
            </Card>
            <Card className={classes.articlesBox}>
                {  article ?
                    article.map(item =>
                        <SmallArticle title={item.title}
                                      text={item.contents}
                                      id={item.idArticle}
                        img={item.pathFull}/>                      )
                    : 'loading'
                }
            </Card>

        </div>
    );
};

export default Articles;
