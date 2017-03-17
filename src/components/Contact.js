import React, { Component } from 'react';
import './contact.styles.scss';

class Contact extends Component {
    render() {
        return (
            <div className="section">
                <h2 className="subheader">Contact</h2>
                <div className="contactContainer">
                    <div className="adjacent">
                        <h3 className="contact">(509) 795 - 4311</h3>
                    </div>
                    <div className="adjacent">
                        <h3 className="contact">brett.elizabeth.berry@gmail.com</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
