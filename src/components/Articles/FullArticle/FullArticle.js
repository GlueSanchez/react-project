import React from 'react';
import c from './../Articles.module.css';
import BigArticle from "../Article/BigArticle";

function FullArticle(props) {

    return (

        <div className={c.wrapper}>

            <aside className={c.aside}>
                menu
            </aside>
            <div className={c.contentBlock}>
                               <div className={c.articles}>
                    <BigArticle id={props.match.params.id}/>

                </div>
            </div>

        </div>
    );
}

export default FullArticle;