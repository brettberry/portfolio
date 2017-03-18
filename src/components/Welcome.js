import React, { Component } from 'react';
import './welcome.styles.scss';

const intro = 'I\'m a math nerd turned self-taught front-end developer who loves combining logic and code to build beautiful web apps and solutions. I strive for clean, reusable code and believe your code should be as beautiful as what it produces.';
const callToAction = 'Check out my projects listed below, and hit me up if you like what you see!';

class Welcome extends Component {
    render() {
        return (
            <div className="welcomeSection">
                <h1 className="animated bounce name">Brett Berry</h1>
                <div className="horizontalRule"/>
                <div className="introSection">
                    <div style={{ backgroundImage: 'url(/images/profilepic.jpg)' }}
                         className="profilePic"/>
                    <div className="textContainer">
                        <h2 className="welcome">Hey there, I'm Brett!</h2>
                        <p className="text">{intro}</p>
                        <p className="text">{callToAction}</p>
                    </div>
                </div>
                <div className="horizontalRule"/>
            </div>
        );
    }
}

export default Welcome;
