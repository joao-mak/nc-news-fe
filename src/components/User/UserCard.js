import React from 'react';

const UserCard = (props) => {
    const user = {...props}
    return (
        <section className="user-card">
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <img alt='user-avatar'src={user.avatar_url} width="200" height="200"/>
        </section>
    );
};

export default UserCard;