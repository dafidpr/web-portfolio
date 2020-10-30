import React from 'react';

function ExperienceContent({ image, title, subtitle, description, date }) {
    return (
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt="Experience image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{subtitle}</p>
                        </div>
                    </div>
            
                    <div className="content">
                        <p>{description}</p>
                        <b>{date}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceContent
