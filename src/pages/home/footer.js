import React from 'react';

import github from '../../images/github.png';


const footer = () => {
    return (
        <footer>
            <div className="email">
                <p>thakran9.anukul@gmail.com</p>
            </div>
            <div className="social_icons">
                <a href="https://github.com/Annukul" ><img src={github} alt="GitHub" /></a>
                <p>© Annukul 2021</p>
            </div>
        </footer>
    )
}

export default footer;
