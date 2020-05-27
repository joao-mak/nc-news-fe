import React, { Component } from 'react';
import Loader from './Loader'

class SingleArticle extends Component {
    state = {
        article: {},
        isLoading: true
    }
    
    render() {
        if (this.state.isLoading) return <Loader/>;
        return (
            <p>single article here</p>
        );
    }
}

export default SingleArticle;