
import React, { Component } from 'react';
import UpArrow from 'react-icons/lib/md/keyboard-arrow-up';
import { Link as ScrollLink } from 'react-scroll';

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
                <ScrollLink to="top" smooth={true} duration={800}>
                    <div className="floatingButton">
                        <UpArrow className="up"/>
                    </div>
                </ScrollLink>
            </div>
        );
    }
}

export default App;
