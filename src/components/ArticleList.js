import React, { Component } from 'react';
import Loader from './Loader'
import ArticleCard from './ArticleCard'
import * as api from '../utils/api'

class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true
    }

    getArticles = () => {
        api.fetchArticles(this.props.topic)
        .then(({data}) => {
            this.setState({articles: data.articles, isLoading: false})
        })
    }

    handleSortChange = (event) => {
        const sortParam = document.getElementById("sortBy").value
        this.setState({
            articles: this.state.articles.sort((article1, article2) => {
                return (article1[sortParam] > article2[sortParam] ? -1 : 1)}), 
            isLoading: false})
    }

    componentDidMount() {
        this.getArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic)
            this.getArticles();
    }
    
    render() {
        if (this.state.isLoading) return <Loader/>;
        return (
            <main>
                <label htmlFor="sortBy">Sort By:  </label>
                <select name="sortBy" id="sortBy" onChange={() => this.handleSortChange()}>
                    <option value="created_at">Date created</option>
                    <option value="comment_count">Comment count</option>
                    <option value="votes">Votes</option>
                </select>
                <ul className="article-list">
                    {this.state.articles.map((article) => {
                        return <li key={article.article_id}><ArticleCard {...article}/></li>
                    })}
                    
                </ul>
            </main>
        );
    }
}

export default ArticleList;