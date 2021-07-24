import React from 'react';

import contactImg from '../../images/contact_3.jpg';

const contact = () => {
    return (
        <div className="contact_div" style={{ backgroundImage: `url(${contactImg})` }} id="contact">
            <form className="contact_form">
                <h1>Send me a message</h1>
                <div className="form_controls">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form_controls">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form_controls">
                    <label htmlFor="message">Message:</label>
                    <textarea type="text" name="message" id="message" rows="5" cols="50" />
                </div>
                <div className="form_controls">
                    <button type="submit" className="form_submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default contact;
