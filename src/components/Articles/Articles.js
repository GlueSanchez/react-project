import React from 'react';
import c from './Articles.module.css';
import SmallArticle from "./Article/SmallArticle";

const Articles = () => {
    return (
        <div className={c.wrapper}>

            <aside className={c.aside}>
                menu
            </aside>
            <div className={c.contentBlock}>
                <div className={c.info}>
                    <div className={c.infoTitle}>Корисна Інфа</div>
                    <div className={c.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa deserunt eos eveniet excepturi explicabo ipsa iusto nihil odit reprehenderit similique, sit tenetur, unde ut.</div>
                </div>
                <div className={c.articles}>
                    <SmallArticle id={1}/>
                    <SmallArticle id={2}/>
                    <SmallArticle id={3}/>
                    <SmallArticle id={4}/>
                </div>
            </div>

        </div>
    );
};

export default Articles;
