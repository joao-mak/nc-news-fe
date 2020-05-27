import React, { Component } from 'react';
import axios from 'axios'
import Loader from './Loader'
import ArticleCard from './ArticleCard'
import CommentList from './CommentList'

class SingleArticle extends Component {
    state = {
        article: {},
        isLoading: true
    }

    componentDidMount() {
        this.getArticleById(this.props.article_id);
    }

    getArticleById = (article_id) => {
        axios.get(`https://maks-nc-news.herokuapp.com/api/articles/${article_id}`)
        .then(({data}) => {
            this.setState({article: data.article, isLoading: false})
        })
    }

    render() {
        const {article, isLoading} = this.state
        if (isLoading) return <Loader/>;
        return (<>
                <ArticleCard {...article}/>
                <h3>Comments:</h3>
                <CommentList article_id={article.article_id}/>
            </>
        );
    }
}

export default SingleArticle;