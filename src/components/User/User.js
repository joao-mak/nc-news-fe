import React, { Component } from 'react';
import Loader from '../Loader'
import ErrHandler from '../ErrHandler'
import * as api from '../../utils/api'
import UserCard from './UserCard'

class User extends Component {
    state = {
        user: {},
        isLoading: true,
        err: ''
    }
    
    getUserByUsername = (username) => {
        api.fetchUserByUsername(username)
        .then((user) => {
            this.setState({user, isLoading: false})
        }).catch(({response}) => {
            this.setState({err: response.data.msg, isLoading: false})
        })
    }
    componentDidMount() {
        const { username } = this.props;
        this.getUserByUsername(username);
    }

    render() {
        const {user, isLoading, err} = this.state
        console.log(user)
        if (isLoading) return <Loader/>;
        if (err) return <ErrHandler msg={err}/>
        return <UserCard {...user}/>;
    }
}

export default User;