import React from 'react';

const CommentCard = (props) => {
    return (
        <div className="comment-card">
            <div className="vote-arrows">
                <span role="img" aria-label="up-arrow">⬆️</span>
                <p>{props.votes}</p>
                <span role="img" aria-label="down-arrow">⬇️</span>
             </div>
            <article className='comment-props'>
                <p>Author: {props.author}</p>
                {props.body && <p>{props.body}</p>}
                <p>Created at: {props.created_at}</p>
            </article>
        </div>
    );
};

export default CommentCard;