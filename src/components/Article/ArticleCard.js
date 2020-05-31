import React from 'react';
import { Link } from '@reach/router'
import VotesSection from '../VotesSection'

const ArticleCard = (props) => {
    const article = {...props}
    return (
        <div className="item-card">
            <VotesSection {...article}/>
            <article className='item-props'>
                <p>{article.body ? 
                    article.title : 
                    <Link className="link" to={`/articles/${article.article_id}`}>{article.title}</Link> }</p>
                <p>Topic: {article.topic}</p>
                <p>Author: <Link className="link" to={`/users/${article.author}`}>{article.author}</Link></p>
                {article.body ? 
                    <p className="item-body">{article.body}</p> : 
                    <p>Comment count: {Number(article.comment_count)}</p>}
                <p>Created at: {article.created_at}</p>
            </article>
        </div>
    );
};

export default ArticleCard;