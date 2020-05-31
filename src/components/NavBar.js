import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api'
import ErrHandler from '../components/ErrHandler'
import Loader from '../components/Loader'

class NavBar extends Component {
    state = {
        topics: [],
        err: '',
        isLoading: true
    }

    componentDidMount() {
        api.fetchTopics()
        .then((topics) => {
            this.setState({topics, isLoading: false})
        }).catch(err => {
            this.setState({err: err.response.data.msg, isLoading: false})
        });
    }

    render() {
        const { topics, err, isLoading } = this.state;
        if (isLoading) return <Loader/>;
        if (err) return <ErrHandler msg={err}/>
        return (
            <nav className="nav-bar">
                    <Link className='link' to='/'>HOME</Link>
                    {topics.map((topic) => {
                    return <Link className='link' key={topic.slug} to={`/topics/${topic.slug}`}>{topic.slug.toUpperCase()}</Link>
                })}
            </nav>
        );
    }
}

export default NavBar;