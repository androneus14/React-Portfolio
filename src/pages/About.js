import React from 'react';
import avatar from '../assets/images/my-profile-pic.jpg';

export default function About() {
    return(
        <section className='about-section'>
            <h2 className='text-center'>About Me</h2>
            <img src={avatar} alt='My Avatar'></img>
            <div className='about-text'>
                <p>
                Welcome to my personal portfolio page! My name is Andy Nguyen and currently, I am studying to become a Full Stack Web Developer through the Monash University Coding Bootcamp.
                </p>
                <p>
                Through the bootcamp, I have learnt front-end and back-end coding technologies such as HTML, CSS, JavaScript, Git, mySQL and several others. There's still a lot for me to learn and understand but I'm a willing learner.
                </p>
            </div>
        </section>
    )
}