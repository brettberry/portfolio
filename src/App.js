
import React, { Component } from 'react';
import UpArrow from 'react-icons/lib/md/keyboard-arrow-up';
import { Link as ScrollLink } from 'react-scroll';
import FaSun from 'react-icons/lib/fa/sun-o';
import FaMoon from 'react-icons/lib/fa/moon-o';
import classnames from 'classnames';

import { Welcome, FreelanceProjects, HobbyProjects, Education,
         Hobbies, Contact, PageNavigation, Footer } from '~/components';
import './app.styles.scss';

class App extends Component {

    state = {
      isDarkMode: false
    }

    setLightMode() {
      this.setState({ isDarkMode: false });
    }

    setDarkMode() {
      this.setState({ isDarkMode: true });
    }

    render() {
        return (
            <div className={this.state.isDarkMode && "dark-mode"}>
                <div className="darkmodeContainer">
                  <div className={classnames('tab', this.state.showThemeMenu && 'showThemeMenu')}>
                    <FaSun className={classnames('icon', !this.state.isDarkMode && 'active')}
                           onClick={this.setLightMode.bind(this)}/>
                    <FaMoon className={classnames('icon', this.state.isDarkMode && 'active')}
                            onClick={this.setDarkMode.bind(this)}/>
                  </div>
                </div>
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
