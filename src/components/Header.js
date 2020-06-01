import React from 'react';

const Header = ({username}) => {
    return (
        <header className="header">
            <h1>
                <img alt='nc-logo'src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png" width='200px'height='45px'></img>
                <span className="code">&lt;</span>
                NEWS
                <span className="code">/&gt;</span>
            </h1>
            <h2>Welcome, {username}</h2>
        </header>
    );
};

export default Header;