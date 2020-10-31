import React from 'react';

function ExperienceContent(props) {
    return (
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.image} alt="Experience Pict" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.title}</p>
                            <p className="subtitle is-6">{props.subtitle}</p>
                        </div>
                    </div>
            
                    <div className="content">
                        <p>{props.description}</p>
                        <b>{props.date}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceContent
