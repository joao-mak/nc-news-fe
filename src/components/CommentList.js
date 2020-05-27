import React, { Component } from 'react';
import axios from 'axios'
import Loader from './Loader'
import CommentCard from './CommentCard'

class CommentList extends Component {
    state = {
        comments: [],
        isLoading: true
    }

    componentDidMount() {
        this.getCommentsByArticleId(this.props.article_id);
    }

    getCommentsByArticleId = (article_id) => {
        axios.get(`https://maks-nc-news.herokuapp.com/api/articles/${article_id}/comments`)
        .then(({data}) => {
            this.setState({comments: data.comments, isLoading: false})
        })
    }
    
    render() {
        if (this.state.isLoading) return <Loader/>;
        return (
            <main>
                <ul className="comment-list">
                    {this.state.comments.map((comment) => {
                        return <li key={comment.comment_id}><CommentCard {...comment}/></li>
                    })}
                </ul>
            </main>
        );
    }
}

export default CommentList;