import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import FaCode from 'react-icons/lib/fa/code';
import FaGithub from 'react-icons/lib/fa/github';
import './project.styles.scss';

class Project extends Component {

    static propTypes = {
        title: PropTypes.string,
        clients: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        demo: PropTypes.string,
        github: PropTypes.string,
        tags: PropTypes.array,
        image: PropTypes.string,
        key: PropTypes.number
    }

    render() {
        const { title, clients, date, description, demo, github, tags, image, key } = this.props;
        return (
            <div className="project" key={key}>
                <h3>{title}</h3>
                <div className="details">
                    {!!clients && <span className="detail">Client: {this.props.clients}</span>}
                    <span className="detail">{date}</span>
                    <div>
                        <p className="description">{description}</p>
                    </div>
                    <div className="codeLinks">
                        {!!demo && <a target="_blank" href={demo} className="link">
                            <div className="iconContainer">
                                <FaCode className="icon"/>
                                <p className="iconText">live demo</p>
                            </div>
                        </a>}
                        {!!github && <a target="_blank" href={github} className="link">
                            <div className="iconContainer">
                                <FaGithub className="icon"/>
                                <p className="iconText">git repo</p>
                            </div>
                        </a>}
                    </div>
                    <div className="imageContainer">
                        {!!image && <div className="image" style={{ backgroundImage: `url(/images/${image})` }}/>}
                    </div>
                </div>
                <div className="tags">
                {map(tags, (tag, index) =>
                    <div className="tagContainer" key={index}>
                        <span className="tag">{tag}</span>
                    </div>
                )}
                </div>
            </div>
        );
    }
}

export default Project;
