import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import FaCode from 'react-icons/lib/fa/code';
import FaGithub from 'react-icons/lib/fa/github';
import './project.styles.scss';

class Project extends Component {

    static propTypes = {
        title: PropTypes.string,
        clients: PropTypes.string,
        status: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        key: PropTypes.number
    }

    render() {
        const { title, clients, date, description, demo, github, tags, key } = this.props;
        return (
            <div className="project" key={key}>
                <h3>{title}</h3>
                <div className="details">
                    <ClientField clients={clients}/>
                    <span className="detail">{date}</span>
                    <div>
                        <p className="description">{description}</p>
                    </div>
                    <div className="codeLinks">
                        <a target="_blank" href={demo} className="link">
                            <div className="iconContainer">
                                <FaCode className="icon"/>
                                <p className="iconText">live demo</p>
                            </div>
                        </a>
                        <a target="_blank" href={github} className="link">
                            <div className="iconContainer">
                                <FaGithub className="icon"/>
                                <p className="iconText">git repo</p>
                            </div>
                        </a>
                    </div>
                    <div className="tags">
                    {map(tags, (tag, index) =>
                        <div className="tagContainer" key={index}>
                            <span className="tag">{tag}</span>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        );
    }
}

class ClientField extends Component {

    static propTypes = {
        clients: PropTypes.string
    }

    state = {
        showClientField: true
    }

    checkForClientField() {
        if (!this.props.clients) {
            this.setState({ showClientField: false });
        }
    }

    componentDidMount() {
        this.checkForClientField();
    }

    render() {
        return (
            <div>
            { this.state.showClientField && <span className="detail">Client: {this.props.clients}</span>}
            </div>
        );
    }
}

export default Project;
