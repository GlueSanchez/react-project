import React, { useEffect, useState } from 'react';
import c from './../Articles.module.css';
import BigArticle from "../Article/BigArticle";
import { Card, CardContent, createStyles, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import SmallArticle from "../Article/SmallArticle";

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

function FullArticle(props) {
    const classes = useStyles();
    const [article, setArticle] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44352/api/home/ArticleGetAll', {
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
                {/*{*/}
                {/*    article ?*/}
                {/*        article.map(item =>*/}

                {/*        )*/}
                {/*        : 'loading'*/}
                {/*}*/}
                <div className={c.articles}>

                    <BigArticle id={props.match.params.id} />

                </div>
            </Card>

        </div>

    );
}

export default FullArticle;