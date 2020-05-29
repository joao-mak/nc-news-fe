import React from 'react';
import VotesSection from './VotesSection'
import {Link} from '@reach/router'

const CommentCard = (props) => {
    const comment = {...props}
    return (
        <div className="comment-card">
            <VotesSection {...comment}/>
            <article className='comment-props'>
                <p>Author: <Link to={`/users/${comment.author}`}>{comment.author}</Link></p>
                {comment.body && <p className="comment-body">{comment.body}</p>}
                <p>Created at: {comment.created_at}</p>
            </article>
        </div>
    );
};

export default CommentCard;