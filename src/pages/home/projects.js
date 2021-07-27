import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [posts, setPosts] = useState([]);

    const dl = "https://annu-port-api.herokuapp.com/uploads/";

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/project");
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    return (
        <>
            <h2 className="project_head">Projects</h2>
            <div className="projects" id="projects" >
                {posts.map((post) => {
                    const { title, image, _id } = post;
                    return (
                        <div className="project" key={_id}>
                            <div className="project_img">
                                <img src={dl + image} alt="Project Name" />
                            </div>
                            <div className="project_text">
                                <h3>{title}</h3>
                                <Link to={`/view/${_id}`} className="project_read_more">Read more...</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Projects;
