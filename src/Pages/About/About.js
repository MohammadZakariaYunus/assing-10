import React from 'react';
import Me from '../../images/me.jpg';

const About = () => {
    return (
        <div className='about'>
            <h1 className='text-center'>About Me</h1>
            <img className='w-50' src={Me} alt="" />
            <p>My name is Mohammad Zakaria Abdullah Yunus. I am a student.I am studding Textile Engineering.I want to be a Professonal Web Developer.My initial Mission is To prepare myself for any required situation to gather all the Experiance available to make myself better.So i wonna work hard to achive my mission.</p>
        </div>
    );
};

export default About;