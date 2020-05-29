import React from 'react';
import { Link } from '@reach/router'
import VotesSection from './VotesSection'

const ArticleCard = (props) => {
    const article = {...props}
    return (
        <div className="article-card">
            <VotesSection {...article}/>
            <article className='article-props'>
                <p className="article-title"><Link to={`/articles/${article.article_id}`}>{article.title}</Link></p>
                <p>Topic: {article.topic}</p>
                <p>Author: <Link to={`/users/${article.author}`}>{article.author}</Link></p>
                {article.body && <p className="article-body">{article.body}</p>}
                {!article.body ?  <p>Comment count: {Number(article.comment_count)}</p> : <p></p>}
                <p>Created at: {article.created_at}</p>
            </article>
        </div>
    );
};

export default ArticleCard;