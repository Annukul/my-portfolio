import React, { useState } from 'react';
import axios from 'axios';

import contactImg from '../../images/contact_3.jpg';

import './create.css';

const Create = () => {
    const [title, setTitle] = useState("");
    const [excrept, setExcrept] = useState("");
    const [link, setLink] = useState("");
    const [about, setAbout] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProject = {
            title,
            excrept,
            link,
            about
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newProject.image = filename; // Added the image name
            console.log(newProject.image);
            try {
                await axios.post("/upload", data);
            } catch (error) {
                console.log(error.message);
            }
        }

        try {
            const res = await axios.post("/project/create", newProject);
            window.location.replace("/view/" + res.data._id);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="contact_div" onSubmit={handleSubmit} style={{ backgroundImage: `url(${file ? URL.createObjectURL(file) : contactImg})` }} id="contact">
            <form className="contact_form">
                <h1>Create a post</h1>
                <div className="button-wrap">
                    <label className="button" htmlFor="upload">Upload File</label>
                    <input id="upload" type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="form_controls">
                    <input type="text" name="title" id="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form_controls">
                    <input type="text" name="excrept" id="excrept" placeholder="excrept" onChange={(e) => setExcrept(e.target.value)} />
                </div>
                <div className="form_controls">
                    <input type="text" name="link" id="link" placeholder="Project Link" onChange={(e) => setLink(e.target.value)} />
                </div>
                <div className="form_controls">
                    <textarea type="text" name="about" id="about" rows="5" cols="50" placeholder="About Project" onChange={(e) => setAbout(e.target.value)} />
                </div>
                <div className="form_controls">
                    <button type="submit" className="form_submit">Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create;
