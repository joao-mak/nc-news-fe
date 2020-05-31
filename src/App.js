import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/Article/ArticleList'
import { Router } from '@reach/router';
import SingleArticle from './components/Article/SingleArticle';
import ErrHandler from './components/ErrHandler';
import User from './components/User/User';

class App extends Component {

  state = {
    username: 'jessjelly'
  }

  render() {
    const {username} = this.state
    return (
      <div className="App">
        <Header username={username}/>
        <NavBar/>
        <Router>
          <ArticleList path="/"/>
          <ArticleList path="/topics/:topic"/>
          <SingleArticle path="/articles/:article_id" username={username}/>
          <User path="/users/:username"/>
          <ErrHandler default/>
        </Router>
      </div>
    );
  }
}

export default App;