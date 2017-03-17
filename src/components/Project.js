import React, { Component, PropTypes } from 'react';
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
        const { title, clients, status, date, description, key } = this.props;
        return (
            <div className="project" key={key}>
                <h3>{title}</h3>
                <div className="details">
                    <div className="row">
                        <ClientField clients={clients}/>
                        <span className="detail">{date}</span>
                    </div>
                    <span className="detail">Status: {status}</span>
                    <div>
                        <p className="description">{description}</p>
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
