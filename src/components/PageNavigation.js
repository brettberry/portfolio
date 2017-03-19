import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import { Link as ScrollLink } from 'react-scroll';
import './pageNavigation.styles.scss';

class PageNavigation extends Component {

    state = {
        isDesktop: true
    };

    constructor(props) {
        super(props);
        this.handleResize = () => this.setState({ isDesktop: matchMedia('(min-width: 500px)').matches });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <div className="container" id="top">
                {this.state.isDesktop ? this.renderDesktopNavigation() : this.renderMobileNavigation()}
                <div className="horizontalRule"/>
            </div>
        );
    }

    renderDesktopNavigation() {
        return (
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
        );
    }

    renderMobileNavigation() {
        return (
            <div className="linksContainer">
                <ScrollLink to="freelance" smooth={true} duration={800}>
                    <h3 className="pageNavigation">Freelance</h3>
                </ScrollLink>
                <ScrollLink to="hobby" smooth={true} duration={800}>
                    <h3 className="pageNavigation">Projects</h3>
                </ScrollLink>
                <ScrollLink to="education" smooth={true} duration={800}>
                    <h3 className="pageNavigation">About</h3>
                </ScrollLink>
                <a target="_blank" href="https://github.com/brettberry">
                    <FaGithub className="githubIcon"/>
                </a>
            </div>
        );
    }
}

export default PageNavigation;
