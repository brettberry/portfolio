import React, { Component } from 'react';
import map from 'lodash/map';

import ProjectCollection from '~/models/ProjectCollection';
import Project from './Project';
import data from '~/data.json';
import './freelanceAndHobbyProjects.styles.scss';

const projects = new ProjectCollection(data.freelance);

class FreelanceProjects extends Component {
    render() {
        return (
            <div className="section" id="freelance">
                <h2 className="subheader bottom">Freelance Projects</h2>
                <div className="collabContainer">
                    <span className="collab">In collaboration with full stack engineer</span>
                    <a target="_blank"
                       href="https://github.com/jonbrennecke"
                       className="githubAnchor">
                        <span className="collab git">Jon Brennecke</span>
                    </a>
                </div>
                <div className="projectContainer">
                {map(projects.toArray(), (project, key) =>
                    <Project title={project.getTitle()}
                             clients={project.getClient()}
                             date={project.getDate()}
                             description={project.getDescription()}
                             demo={project.getDemo()}
                             github={project.getGithub()}
                             tags={project.getTech()}
                             key={key}/>
                )}
                </div>
                <div className="horizontalRule"/>
            </div>
        );
    }
}

export default FreelanceProjects;
