import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList'
import { Router } from '@reach/router';
import SingleArticle from './components/SingleArticle';

class App extends Component {

  state = {
    user: 'Mak'
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <NavBar/>
        <Router>
          <ArticleList path="/"/>
          <ArticleList path="/topics/:topic"/>
          <SingleArticle path="articles/:article_id"/>
        </Router>
      </div>
    );
  }
}

export default App;