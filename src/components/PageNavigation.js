import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import { Link as ScrollLink } from 'react-scroll';
import './pageNavigation.styles.scss';

function PageNavigation() {
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
        </div>
    );
}

export default PageNavigation;
