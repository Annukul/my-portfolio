import React from 'react';

import me from '../../images/me.jpg';

const about = () => {
    return (
        <div className="about" id="about" style={{ backgroundImage: `url(${me})` }}>
            <div className="about_me">
                <h2 className="about_me_head">About Me</h2>
                <p className="about_me_highlight">Hi! I am Annukul and I am a Full Stack developer</p>
                <p className="about_me_paragraph">
                    I was born in the year 2000 and yes I don’t have to calculate my age.
                    I developed an interest in web technologies when I was in my first year
                    of college (the year was the end of 2019). Since then I have been
                    learning and implementing what I have learned. To say exactly, I
                    have beek developing a lot of personal projects since then. And
                    now I have developed a sense of design. I love when the websites
                    I make look great. I focus more on the responsiveness of the website
                    because now they're a lot of traffic that comes from different devices,
                    some of them are big and some of them are small.<br />
                    <br />
                    I mostly do projects in the MERN stacks but I have a very good knowledge of PHP too.<br />
                    <br />
                    Apart from web dev, I love to travel, read books, and listen to good music. And
                    trust me I have very good taste in music. Music helps me to code faster and more
                    efficiently (just saying).<br />
                </p>
            </div>
        </div>
    )
}

export default about;
