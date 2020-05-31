import React from 'react';
import VotesSection from '../VotesSection'
import {Link} from '@reach/router'

const CommentCard = (props) => {
    const comment = {...props}
    return (
        <div className="item-card">
            <VotesSection {...comment}/>
            <article className='item-props'>
                <p>Author: <Link className="link" to={`/users/${comment.author}`}>{comment.author}</Link></p>
                <p className="item-body">{comment.body}</p>
                <p>Created at: {comment.created_at}</p>
                {(comment.author === comment.username && <button onClick={(event) => {comment.handleDelete(comment.comment_id)}}>delete</button>)}
            </article>
        </div>
    );
};

export default CommentCard;