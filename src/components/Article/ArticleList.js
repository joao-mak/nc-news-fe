import React, { Component } from 'react';
import ErrHandler from '../ErrHandler';
import Loader from '../Loader'
import ArticleCard from './ArticleCard'
import * as api from '../../utils/api'

class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true,
        err: ''
    }

    getArticles = (sortParam) => {
        const { topic } = this.props;
        api.fetchArticles(topic, sortParam)
        .then((articles) => {
            this.setState({articles, isLoading: false})
        }).catch(({response}) => {
            this.setState({err: response.data.msg, isLoading: false})
        })
    }

    handleSortChange = (event) => {
        const sortParam = event.target.value;
        this.getArticles(sortParam);
    }

    componentDidMount() {
        this.getArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        const topic = this.props
        if (prevProps.topic !== topic)
            this.getArticles();
    }
    
    render() {
        const { err, isLoading, articles } = this.state;
        if (isLoading) return <Loader/>;
        if (err) return <ErrHandler msg={err}/>
        return (
            <main>
                <label htmlFor="sortBy">Sort by: </label>
                <select name="sortBy" id="sortBy" onChange={this.handleSortChange}>
                    <option value="created_at">Date created</option>
                    <option value="comment_count">Comment count</option>
                    <option value="votes">Votes</option>
                </select>
                <ul className="item-list">
                    {articles.map((article) => {
                        return <li key={article.article_id}><ArticleCard {...article}/></li>
                    })}
                    
                </ul>
            </main>
        );
    }
}

export default ArticleList;