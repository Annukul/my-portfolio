import React from 'react';

import './home.css';

// Frontend
import html from '../../icons/html.png';
import css from '../../icons/css.png';
import js from '../../icons/javascript.png';
import reactimg from '../../icons/react.svg';
import boot from '../../icons/bootstrap.svg';

// Backend
import php from '../../icons/php.png';
import nodeimg from '../../icons/node.svg';

// Databases
import mysql from '../../icons/mysql.png';
import mongo from '../../icons/mongo.svg';

// Version control
import git from '../../icons/git.svg';
import github from '../../icons/github.svg';

const content = () => {
    return (
        <div className="content" id="content">
            <h2 className="content_head"><strong>Tech</strong> I use.</h2>
            <div className="techs">
                <div className="frontend">
                    <h3>Frontend</h3>
                    <img src={html} alt="Html" />
                    <img src={css} alt="CSS" />
                    <img src={js} alt="JavaScript" />
                    <img src={reactimg} alt="ReactJS" />
                    <img src={boot} alt="Bootstrap" />
                </div>
                <div className="backend_databases">
                    <div className="backend">
                        <h3>Backend</h3>
                        <img src={php} alt="PHP" />
                        <img src={nodeimg} alt="NodeJS" />
                    </div>
                    <div className="databases">
                        <h3>Databases</h3>
                        <img src={mysql} alt="MySQL" />
                        <img src={mongo} alt="MongoDB" />
                    </div>
                </div>
                <div className="version_control">
                    <h3>Version Control</h3>
                    <img src={git} alt="Git" />
                    <img src={github} alt="GitHub" />
                </div>
            </div>
        </div>
    )
}

export default content;
