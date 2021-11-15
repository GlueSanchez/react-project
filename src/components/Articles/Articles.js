import React, { useEffect, useState } from 'react';
import c from './Articles.module.css';
import SmallArticle from "./Article/SmallArticle";
import { Card, CardContent, createStyles, makeStyles } from "@material-ui/core";

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
        // <div className={c.wrapper}>
        //     <aside className={c.aside}>
        //         menu
        //     </aside>
        //     <div className={c.contentBlock}>
        //         <div className={c.info}>
        //             <div className={c.infoTitle}>Корисна Інфа</div>
        //             <div className={c.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa
        //                 deserunt eos eveniet excepturi explicabo ipsa iusto nihil odit reprehenderit similique, sit
        //                 tenetur, unde ut.
        //             </div>
        //         </div>
        //         <div className={c.articles}>
        //             {
        //                 article ?
        //                     article.map(item =>
        //                         <SmallArticle title={item.title}
        //                                       text={item.contents}
        //                                       id={item.idArticle} />
        //                     )
        //                     : 'loading'
        //             }
        //         </div>
        //     </div>
        //
        // </div>
        <div className={classes.articleBlock}>
            <Card className={classes.mainBox}>
                <CardContent>
                    main
                </CardContent>
            </Card>
            <Card className={classes.articlesBox}>
                {  article ?
                    article.map(item =>
                        <SmallArticle title={item.title}
                                      text={item.contents}
                                      id={item.idArticle} />                      )
                    : 'loading'
                }
            </Card>

        </div>
    );
};

export default Articles;
