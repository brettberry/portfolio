import React, { Component } from 'react';
import FaCap from 'react-icons/lib/fa/graduation-cap';
import './education.styles.scss';

class Education extends Component {
    render() {
        return (
            <div className="section" id="education">
                <h2 className="subheader">Education</h2>
                <div className="college">
                    <FaCap className="cap"/>
                    <h2 className="degree">Bachelor of Science in Mathematics</h2>
                    <h3 className="text">Whitworth University, Spokane WA</h3>
                </div>
                <div className="horizontalRule"/>
            </div>
        );
    }
}

export default Education;
