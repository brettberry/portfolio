import React, { Component } from 'react';
import '~/app.styles.scss';

const intro = 'I\'m a math nerd turned front-end developer who loves combining logic and code to build beautiful web apps and solutions for you. I strive for clean, reusable code and believe your code should be as beautiful as what it produces.';
const callToAction = 'Check out my projects listed below, and hit me up if you like what you see!';

class Welcome extends Component {
    render() {
        return (
            <div className="welcomeSection">
                <div style={{ backgroundImage: 'url(/images/profilepic.jpg)' }}
                     className="profilePic"/>
                <div className="textContainer">
                    <h2 className="subheader">Hey there, I'm Brett!</h2>
                    <p className="text">{intro}</p>
                    <p className="text">{callToAction}</p>
                </div>
            </div>
        );
    }
}

export default Welcome;
