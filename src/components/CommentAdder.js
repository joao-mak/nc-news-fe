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
            <>
                <h3>Post a comment:</h3>
                <form className="comment-form">
                    <input id="commemt-box" 
                           onChange={this.handleChange} 
                           name="body" 
                           type="textbox"
                           autoComplete="off"
                           value={this.state.body}>
                    </input>
                    <button onClick={this.handleSubmit} type='submit'>submit</button>
                </form>
            </>
        );
    }
}

export default CommentAdder;
