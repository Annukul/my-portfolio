import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Footer from '../home/footer';

import './view.css';

import html from '../../icons/html.png';
import css from '../../icons/css.png';
import js from '../../icons/javascript.png';
import reactimg from '../../icons/react.svg';
import nodeimg from '../../icons/node.svg';
import mongo from '../../icons/mongo.svg';

const ViewProject = () => {
    const [post, setPost] = useState([]);
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const dl = "http://localhost:5000/uploads/";

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/project/" + id);
            setPost(res.data);
        }
        fetchPost();
    }, [id]);

    return (
        <div className="view_project">
            <div className="view_project_img">
                <img src={dl + post.image} alt="Project Screenshot" />
            </div>
            <div className="view_project_text">
                <div className="view_project_about">
                    <h2>{post.title}</h2>
                    <p>{post.about}</p>
                </div>
                <div className="view_project_tech">
                    <h3>Tech used</h3>
                    <div className="view_project_tech_img">
                        <img src={html} alt="HTML Logo" />
                        <img src={css} alt="Css Logo" />
                        <img src={js} alt="JS Logo" />
                        <img src={reactimg} alt="ReactJS Logo" />
                        <img src={nodeimg} alt="NodeJS Logo" />
                        <img src={mongo} alt="MongoDB Logo" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewProject;
