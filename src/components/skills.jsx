import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {

    return (
        <div className="row" id="skills">
            <div className="col-md-12">
                <h2 className="title">Skills</h2>
                <div className="skills-icons">
                    <div className="skill">
                        <FontAwesomeIcon icon={faHtml5} />
                        <span>HTML</span>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faCss3} />
                        <span>CSS</span>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faJs} />
                        <span>JavaScript</span>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faNodeJs} />
                        <span>Node.js</span>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} />
                        <span>React.js</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;

