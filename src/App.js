
import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';
import FaMobile from 'react-icons/lib/fa/mobile';
import FaMedium from 'react-icons/lib/fa/medium';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaCode from 'react-icons/lib/fa/code';

import { Welcome, FreelanceProjects, HobbyProjects, Education, Hobbies } from '~/components';
import './app.styles.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
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
            </div>
        );
    }
}

export default App;
