import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader'
import ArticleCard from './ArticleCard'

class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true
    }

    componentDidMount() {
        this.getArticles();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic)
            this.getArticles();
    }

    getArticles = () => {
        const { topic } = this.props;
        axios.get('https://maks-nc-news.herokuapp.com/api/articles', {
            params: {topic}
        })
        .then(({data}) => {
            this.setState({articles: data.articles, isLoading: false})
        })
    }
    
    render() {
        if (this.state.isLoading) return <Loader/>;
        return (
            <main>
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