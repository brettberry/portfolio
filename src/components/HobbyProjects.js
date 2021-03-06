import React, { Component } from 'react';
import map from 'lodash/map';

import ProjectCollection from '~/models/ProjectCollection';
import Project from './Project';
import data from '~/data.json';
import './freelanceAndHobbyProjects.styles.scss';

const projects = new ProjectCollection(data.hobby);

class HobbyProjects extends Component {
    render() {
        return (
            <div className="section" id="hobby">
                <h2 className="subheader left">Hobby Projects</h2>
                <div className="projectContainer">
                {map(projects.toArray(), (project, key) =>
                    <Project title={project.getTitle()}
                             date={project.getDate()}
                             description={project.getDescription()}
                             demo={project.getDemo()}
                             github={project.getGithub()}
                             image={project.getImage()}
                             tags={project.getTech()}
                             key={key}/>
                )}
                </div>
                <div className="horizontalRule"/>
            </div>
        );
    }
}

export default HobbyProjects;
