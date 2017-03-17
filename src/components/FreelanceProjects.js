import React, { Component } from 'react';
import './freelanceProjects.styles.scss';
import '~/app.styles.scss';

class FreelanceProjects extends Component {
    render() {
        return (
            <div className="section">
                <h2 className="subheader left">Freelance Projects</h2>
                <div className="projectContainer">
                    <div className="project">
                        <h3>Project 1</h3>
                    </div>
                    <div className="project">
                        <h3>Project 1</h3>
                    </div>
                    <div className="project">
                        <h3>Project 1</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default FreelanceProjects;
