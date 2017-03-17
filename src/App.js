
import React, { Component } from 'react';
import FaCode from 'react-icons/lib/fa/code';
import FaGithub from 'react-icons/lib/fa/github';
import { Link as ScrollLink } from 'react-scroll';

import { Welcome, FreelanceProjects, HobbyProjects, Education, Hobbies, Contact } from '~/components';
import './app.styles.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="linksContainer">
                    <ScrollLink to="freelance" smooth={true} duration={800}>
                        <h3 className="pageNavigation">Freelance</h3>
                    </ScrollLink>
                    <ScrollLink to="hobby" smooth={true} duration={800}>
                        <h3 className="pageNavigation">Hobby Projects</h3>
                    </ScrollLink>
                    <ScrollLink to="education" smooth={true} duration={800}>
                        <h3 className="pageNavigation">Education</h3>
                    </ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={800}>
                        <h3 className="pageNavigation">About</h3>
                    </ScrollLink>
                    <a target="_blank" href="https://github.com/brettberry">
                        <FaGithub className="githubIcon"/>
                    </a>
                </div>
                <div className="horizontalRule"/>
                <h1 className="name">Brett Berry</h1>
                <div className="horizontalRule"/>
                <Welcome/>
                <div className="horizontalRule"/>
                <FreelanceProjects/>
                <div className="horizontalRule"/>
                <HobbyProjects/>
                <div className="horizontalRule"/>
                <Education/>
                <div className="horizontalRule"/>
                <Hobbies/>
                <div className="horizontalRule"/>
                <Contact/>
                <div className="horizontalRule"/>
                <a target="_blank"
                   className="link"
                   href="https://github.com/brettberry/portfolio">
                   <div className="sourceContainer">
                        <FaCode className="icon"/>
                        <h3 className="footer">source code</h3>
                        <FaCode className="icon"/>
                    </div>
                </a>
            </div>
        );
    }
}

export default App;
