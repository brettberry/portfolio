import React, { Component } from 'react';
import FaMedium from 'react-icons/lib/fa/medium';
import FaPaw from 'react-icons/lib/fa/paw';
import FaInstagram from 'react-icons/lib/fa/instagram';
import './hobbies.styles.scss';
import '~/app.styles.scss';

class Hobbies extends Component {
    render() {
        return (
            <div className="section" id="about">
                <h2 className="subheader">About Me</h2>
                <p className="aboutMe">When I'm not writing code and drinking coffee, you'll find me
                    playing with my dog Nelly, blogging about Math, practicing yoga, watching classic
                    movies and reruns of I Love Lucy, and on a lucky day you'll find me spending time
                    with family and friends outdoors jogging, hiking, shooting archery, and maybe even bowhunting.
                </p>
                <div className="hobbies">
                    <a href="https://medium.com/i-math" target="_blank" className="hobbyLink">
                        <FaMedium className="hobbyIcon"/>
                        <p className="hobby">math blog</p>
                    </a>
                    <a href="https://www.instagram.com/explore/tags/nellybellypup/" target="_blank" className="hobbyLink">
                        <FaPaw className="hobbyIcon"/>
                        <p className="hobby">puppy pics</p>
                    </a>
                    <a href="https://www.instagram.com/bretteberry/" target="_blank" className="hobbyLink">
                        <FaInstagram className="hobbyIcon"/>
                        <p className="hobby">me</p>
                    </a>
                </div>
                <div className="horizontalRule"/>
            </div>
        );
    }
}

export default Hobbies;
