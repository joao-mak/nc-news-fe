import React, { Component } from 'react';

class CommentAdder extends Component {
    state = {
        body: ''
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ body: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { body } = this.state;
        const { article_id, username, addCommentToArticle } = this.props
        addCommentToArticle(article_id, username, body);
        this.setState({ body: '' });
    };
    
    render() {
        return (
            <div className="post-section">
                <p>Comments:</p>
                <p>Post a comment:</p>
                <form className="comment-form">
                    <textarea id="commemt-box" onChange={this.handleChange} name="body" autoComplete="off" value={this.state.body} required></textarea>
                    <button className='button' onClick={this.handleSubmit} type='submit'>submit</button>
                </form>
            </div>
        );
    }
}

export default CommentAdder;
