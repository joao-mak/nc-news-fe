import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api'

class NavBar extends Component {
    state = {
        topics: []
    }

    componentDidMount() {
        api.fetchTopics()
        .then(({data}) => {
            this.setState({topics: data.topics})
        });
    }

    render() {
        return (
            <nav>
                <ul className="nav-items">
                    <li className="nav-link"><Link to='/'><h2>home</h2></Link></li>
                    {this.state.topics.map((topic) => {
                    return <li className="nav-link" key={topic.slug}><Link to={`/topics/${topic.slug}`}><h2>{topic.slug}</h2></Link></li>
                })}
                </ul>
            </nav>
        );
    }
}

export default NavBar;