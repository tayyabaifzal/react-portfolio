import React from 'react';
import './about.css';

export default function About() {

    return (
        <div className="container">
            <div className="row" id="about">
                <div className="intro col-md-8">
                    <h2 className="title">Hi,</h2>
                    <p>Weicome to my portfolio. </p>
                    <p> I am Tayyaba Ifzal, a Passionate Psychologist Transitioning to Front-End Developer: Bridging Humanity with Technology. </p>
                    <p>I am looking to start my career as a front-end developer.</p>
                

                    <p className='cv-text'>
                        Want to know more about my professional work history? Take a look at my resume.
                    </p>
                    <a href="assets\docs\TaCV.pdf" rel="noopener noreferrer" className="btn btn-primary btn-download" ><button> MY CV </button></a>
                </div>
                <div className='col-md-4'>
                <img src="assets/images/ava.png" class="img-fluid" />
                </div>
            </div>
        </div>
    );
}

// import React from 'react';
// import './about.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faCss3, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

// export default function About() {
//     return (
//         <div className="container">
//             <div className="row" id="about">
//                 <div className="intro col-md-8">
//                     <h2 className="title">Hi,</h2>
//                     <p>
//                         Welcome to my portfolio. I am Tayyaba Ifzal, a psychologist and a beginner frontend developer. I am looking to start my career as a front-end developer.
//                     </p>
//                     <p className='cv-text'>
//                         Want to know more about my professional work history? Take a look at my resume.
//                     </p>
//                     <a href="assets/docs/TaCV.pdf" rel="noopener noreferrer" className="btn btn-primary btn-download">
//                         <button> MY CV </button>
//                     </a>
//                 </div>
//                 <div className='col-md-4'>
//                     <img src="assets/images/ava.png" className="img-fluid" alt="Avatar" />
//                 </div>
//             </div>
//             <div className="row" id="skills">
//             <div className="col-md-12">
//                 <h2 className="title">Skills</h2>
//                 <div className="skills-icons">
//                     <div className="skill">
//                         <FontAwesomeIcon icon={faHtml5} />
//                         <span>HTML</span>
//                     </div>
//                     <div className="skill">
//                         <FontAwesomeIcon icon={faCss3} />
//                         <span>CSS</span>
//                     </div>
//                     <div className="skill">
//                         <FontAwesomeIcon icon={faJs} />
//                         <span>JavaScript</span>
//                     </div>
//                     <div className="skill">
//                         <FontAwesomeIcon icon={faNodeJs} />
//                         <span>Node.js</span>
//                     </div>
//                     <div className="skill">
//                         <FontAwesomeIcon icon={faReact} />
//                         <span>React.js</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
            
//     );
// }

