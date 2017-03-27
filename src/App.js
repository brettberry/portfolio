
import React, { Component } from 'react';
import UpArrow from 'react-icons/lib/md/keyboard-arrow-up';
import { Link as ScrollLink } from 'react-scroll';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaSun from 'react-icons/lib/fa/sun-o';
import FaMoon from 'react-icons/lib/fa/moon-o';
import classnames from 'classnames';

import { Welcome, FreelanceProjects, HobbyProjects, Education,
         Hobbies, Contact, PageNavigation, Footer } from '~/components';
import './app.styles.scss';

class App extends Component {

    state = {
      isDarkMode: false,
      showThemeMenu: false
    }

    toggleThemeMenu() {
      this.setState({ showThemeMenu: !this.state.showThemeMenu });
    }

    render() {
        return (
            <div className={this.state.isDarkMode && "dark-mode"}>
                <div className="darkmodeContainer">
                  <div className={classnames('tab', this.state.showThemeMenu && 'showThemeMenu')}
                       onClick={this.toggleThemeMenu.bind(this)}>
                    <FaAngleLeft className="icon"/>
                    <div className="tabExpanded">
                      <FaAngleUp className="icon"/>
                      <FaSun className="icon"/>
                      <FaMoon className="icon"/>
                    </div>
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
