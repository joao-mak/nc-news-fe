import React, { Component } from 'react';
import Loader from './Loader'
import ErrHandler from './ErrHandler'
import * as api from '../utils/api'
import UserCard from './UserCard'

class User extends Component {
    state = {
        user: {},
        isLoading: true,
        err: ''
    }
    
    getUserByUsername = (username) => {
        api.fetchUserByUsername(username)
        .then(({data}) => {
            this.setState({user: data.user, isLoading: false})
        }).catch(err => {
            this.setState({err: err.response.data.msg, isLoading: false})
        })
    }
    componentDidMount() {
        this.getUserByUsername(this.props.username);
    }

    render() {
        const {user, isLoading, err} = this.state
        if (isLoading) return <Loader/>;
        if (err) return <ErrHandler msg={err}/>
        return <UserCard {...user}/>;
    }
}

export default User;