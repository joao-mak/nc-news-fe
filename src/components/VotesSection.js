import React, { Component } from 'react';
import * as api from '../utils/api';

class VotesSection extends Component {
    state = {
        newVotes: 0,
    }

    incrementVotes = (value) => {
        this.props.comment_id ? 
            api.patchCommentsById(this.props.comment_id, value) :
            api.patchArticleById(this.props.article_id, value)
    }

    handleVote = (event) => {
        const incValue = Number(event.target.title)
        this.setState(({newVotes}) => {
            return { newVotes: newVotes + incValue }
        })
        this.incrementVotes(incValue);
    }
    

    render() {
        const {votes} = this.props;
        const {newVotes} = this.state;
        return (
            <div className="vote-arrows">
                <button onClick={this.handleVote} title={1} disabled={this.state.newVotes === 1} ><span role="img" title={1} aria-label="up-arrow">⬆️</span></button>
                <p>{votes + newVotes}</p>
                <button onClick={this.handleVote} title={-1} disabled={this.state.newVotes === -1}><span role="img" title={-1} aria-label="down-arrow">⬇️</span></button>
            </div>
        );
    }
}

export default VotesSection;