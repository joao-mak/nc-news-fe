import React, { Component } from 'react';
import Loader from './Loader'
import ArticleCard from './ArticleCard'
import CommentList from './CommentList'
import * as api from '../utils/api'
import ErrHandler from './ErrHandler';

class SingleArticle extends Component {
    state = {
        article: {},
        isLoading: true,
        err: ''
    }
    
    getArticleById = (article_id) => {
        api.fetchArticleById(article_id)
        .then(({data}) => {
            this.setState({article: data.article, isLoading: false})
        }).catch(err => {
            this.setState({err: err.response.data.msg, isLoading: false})
        })
    }
    componentDidMount() {
        this.getArticleById(this.props.article_id);
    }

    render() {
        const { article, isLoading, err } = this.state
        const { username } = this.props;
        if (isLoading) return <Loader/>;
        if (err) return <ErrHandler msg={err}/>
        return (<>
                <ArticleCard {...article}/>
                <h3>Comments:</h3>
                <CommentList article_id={article.article_id} username={username}/>
            </>
        );
    }
}

export default SingleArticle;