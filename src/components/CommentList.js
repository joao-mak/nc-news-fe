import React, { Component } from 'react';
import Loader from './Loader';
import CommentCard from './CommentCard';
import * as api from '../utils/api';
import CommentAdder from './CommentAdder';
import ErrHandler from './ErrHandler';

class CommentList extends Component {
    state = {
        comments: [],
        isLoading: true,
        err: ''
    }

    componentDidMount() {
        this.getCommentsByArticleId(this.props.article_id);
    }

    getCommentsByArticleId = (article_id) => {
        api.fetchCommentsByArticleId(article_id)
        .then(({data}) => {
            this.setState({comments: data.comments, isLoading: false})
        }).catch(err => {
            this.setState({err: err.response.data.msg, isLoading: false})
        })
    }

    addCommentToArticle = (article_id, username, body) => {
        api.postComment(article_id, username, body)
        .then(({data}) => {
            const newComment = data.comment;
            this.setState({
                comments: [newComment, ...this.state.comments], 
                isLoading: false
            })
        }).catch(err => {
            this.setState({err: err.response.data.msg, isLoading: false})
        })
    }

    handleDelete = (comment_id) => {
        api.deleteCommentById(comment_id)
        .then((res) => {
            this.setState({
                comments: this.state.comments.filter(comment => comment.comment_id !== comment_id), 
                isLoading: false})
        }).catch(err => {
            this.setState({err: err.response.data.msg, isLoading: false})
        })
    }
    
    render() {
        const { err, comments, isLoading } = this.state
        const { article_id, username } = this.props;
        console.log(article_id, username)
        if (isLoading) return <Loader/>;
        if (err) return <ErrHandler msg={err}/>
        return (
            <main>
                <CommentAdder article_id={article_id} username={username} addCommentToArticle={this.addCommentToArticle}/>
                <ul className="comment-list">
                    {comments.map((comment) => {
                        return <li key={comment.comment_id}>
                            <CommentCard {...comment}/>
                            {(comment.author === username && <button onClick={(event) => {this.handleDelete(comment.comment_id)}}>delete</button>)}  
                            </li>
                    })}
                </ul>
            </main>
        );
    }
}

export default CommentList;