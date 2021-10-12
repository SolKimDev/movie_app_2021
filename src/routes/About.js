import React from 'react';
import './About.css';

const About = (props) => {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Lorem ipsum dolor sit amet, consectetus abcd..."
            </span>
            <span>- The Lorem Ipsum Foundation, (1916)</span>
        </div>
    );
};

export default About;