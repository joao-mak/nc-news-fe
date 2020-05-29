import React from 'react';

const ErrHandler = ({msg}) => {
    const errMsg = msg ? msg : "Oops! Something went wrong... 404: Page not found"
    return (
        <section>
            <h3>{errMsg}</h3>
        </section>
    );
};

export default ErrHandler;