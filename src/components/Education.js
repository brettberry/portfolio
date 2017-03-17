import React, { Component } from 'react';
import FaCap from 'react-icons/lib/fa/graduation-cap';
import '~/app.styles.scss';

class Education extends Component {
    render() {
        return (
            <div className="section">
                <h2 className="subheader">Education</h2>
                <FaCap className="cap"/>
                <h2 className="text">Bachelor of Science in Mathematics</h2>
                <h3 className="text">Whitworth University, Spokane WA</h3>
            </div>
        );
    }
}

export default Education;
