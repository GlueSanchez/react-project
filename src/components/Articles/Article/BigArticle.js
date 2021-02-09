import React from 'react';
import c from './../Articles.module.css';
import {NavLink} from "react-router-dom";

const BigArticle = (props) => {

    return (
        <div className={c.article+' '+c.articleBig}>

                <div className={c.articleBlock}>
                    <div className={c.articleTitle}>Slon {props.id}</div>

                    <div className={c.articleImg+' '+c.articleBigImg}></div>

                    <div className={c.articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        commodi
                        dicta dolores eum nostrum obcaecati quas quo sed. Consectetur, nesciunt!
                    </div>


            </div>
        </div>
    );
}

export default BigArticle;