import React from 'react';

const Header = () => {
    return (
        <header>
            <h1 style={headingStyle}> Hey Kids!!</h1>
            <h1 style={headingStyle2}> Welcome To World Hopper!!! </h1>
        </header>
    );
}

const headingStyle = {
    backgroundColor: '#282c34',
    fontize: 'calc(80px + 2vmin)',
    color: 'hotpink'
}

const headingStyle2 = {
    backgroundColor: '#282c34',
    fontize: 'calc(80px + 2vmin)',
    color: 'yellowgreen'
}
export default Header;
