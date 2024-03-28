import React from 'react';
import './about.css';

export default function About() {

    return (
        <div className="container">
            <div className="row" id="about">
                <div className="intro col-md-8">
                    <h2 className="title">Hi,</h2>
                    <p>Welcome to my portfolio. </p>
                    <p>I am Tayyaba Ifzal, a Passionate Psychologist Transitioning to Front-End Developer: Bridging Humanity with Technology. </p>
                    <p>I am looking to start my career as a front-end developer.</p>


                    <p className='cv-text'>
                        Want to know more about my professional work history? Take a look at my resume.
                    </p>
                    <a href="assets\docs\TayyabaCV.pdf" rel="noopener noreferrer" className="btn btn-primary btn-download" ><button> MY CV </button></a>
                </div>
                <div className='col-md-4'>
                    <img src="assets/images/ava.png" className="img-fluid" alt="girl"/>
                </div>
            </div>
        </div>
    );
}
