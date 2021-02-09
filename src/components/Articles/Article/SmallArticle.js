import React from 'react';
import c from './../Articles.module.css';
import { NavLink} from "react-router-dom";

const SmallArticle = (props) => {

    return (
        <div className={c.article}>
            <NavLink className={c.articleLink} to={`/articles/${props.id}`}>
                <div className={c.articleImg}></div>
                <div className={c.articleBlock}>
                    <div className={c.articleTitle}>Slon {props.id}</div>
                    <div className={c.articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        commodi
                        dicta dolores eum nostrum obcaecati quas quo sed. Consectetur, nesciunt!
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default SmallArticle;