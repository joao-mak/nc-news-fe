import React from 'react';
import { Link } from '@reach/router'

const ArticleCard = (props) => {
    return (
        <div className="article-card">
            <div className="vote-arrows">
                <span role="img" aria-label="up-arrow">⬆️</span>
                <span role="img" aria-label="down-arrow">⬇️</span>
             </div>
            <article className='article-props'>
                <p><Link to={`/articles/${props.article_id}`}>{props.title}</Link></p>
                <p>Topic: {props.topic}</p>
                <p>Votes: {props.votes}</p>
                <p>Comment count: {props.comment_count}</p>
            </article>
        </div>
        
        
        
    );
};

export default ArticleCard;