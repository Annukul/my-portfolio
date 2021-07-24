import React from 'react';

import Header from './header';
import Content from './content';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Content />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;
