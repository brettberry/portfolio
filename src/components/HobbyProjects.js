import React, { Component } from 'react';
import map from 'lodash/map';

import ProjectCollection from '~/models/ProjectCollection';
import data from '~/data.json';
import Project from './Project';
import '~/app.styles.scss';

const projects = new ProjectCollection(data.hobby);

class HobbyProjects extends Component {
    render() {
        return (
            <div className="section">
                <h2 className="subheader left">Hobby Projects</h2>
                <div className="projectContainer">
                {map(projects.toArray(), (project, key) =>
                    <Project title={project.getTitle()}
                             date={project.getDate()}
                             description={project.getDescription()}
                             status={project.getStatus()}
                             key={key}/>
                )}
                </div>
            </div>
        );
    }
}

export default HobbyProjects;
