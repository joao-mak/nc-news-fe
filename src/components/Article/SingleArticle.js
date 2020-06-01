import React, { Component } from 'react';
import Loader from '../Loader'
import ArticleCard from './ArticleCard'
import CommentList from '../Comment/CommentList'
import * as api from '../../utils/api'
import ErrHandler from '../ErrHandler';

class SingleArticle extends Component {
    state = {
        article: {},
        isLoading: true,
        err: ''
    }
    
    getArticleById = (article_id) => {
        api.fetchArticleById(article_id)
        .then((article) => {
            this.setState({article, isLoading: false})
        }).catch(({response}) => {
            this.setState({err: response.data.msg, isLoading: false})
        })
    }
    componentDidMount() {
        const { article_id } = this.props;
        this.getArticleById(article_id);
    }

    render() {
        const { article, isLoading, err } = this.state
        const { username } = this.props;
        if (isLoading) return <Loader/>;
        if (err) return <ErrHandler msg={err}/>
        return (
            <div className='single-article'>
                <ArticleCard {...article}/>
                <CommentList article_id={article.article_id} username={username}/>
            </div>
        );
    }
}

export default SingleArticle;