import React from 'react';

const UserCard = (props) => {
    const user = {...props}
    return (
        <section className="user-card">
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <img alt='user-avatar'src={user.avatar_url} width="300" height="300"/>
        </section>
    );
};

export default UserCard;