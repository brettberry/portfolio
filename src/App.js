
import React, { Component } from 'react';

import { Welcome, FreelanceProjects, HobbyProjects, Education,
         Hobbies, Contact, PageNavigation, Footer } from '~/components';
import './app.styles.scss';

class App extends Component {
    render() {
        return (
            <div>
                <PageNavigation/>
                <Welcome/>
                <FreelanceProjects/>
                <HobbyProjects/>
                <Education/>
                <Hobbies/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
