import React, { Component } from 'react';
import map from 'lodash/map';

import ProjectCollection from '~/models/ProjectCollection';
import data from '~/data.json';
import Project from './Project';
import './freelanceProjects.styles.scss';
import '~/app.styles.scss';

const projects = new ProjectCollection(data.freelance);

class FreelanceProjects extends Component {
    render() {
        return (
            <div className="section">
                <h2 className="subheader left">Freelance Projects</h2>
                <div className="projectContainer">
                {map(projects.toArray(), (project, key) =>
                    <Project title={project.getTitle()}
                             clients={project.getClient()}
                             status={project.getStatus()}
                             date={project.getDate()}
                             description={project.getDescription()}
                             tags={project.getTech()}
                             key={key}/>
                )}
                </div>
            </div>
        );
    }
}

export default FreelanceProjects;
