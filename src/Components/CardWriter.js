import React from 'react';

function CardWriter(props) {
    
    const {avatar, bio, nationality, name} = props;

    return (
        <section className="card mt-4 p-1">
            <div>
                <img className="img-profile" alt="Profile" src={avatar} />
                <div className="info-card">
                    <span className="name">{name}</span>
                </div>
            </div>
            <div className="d-flex flex-column">
                <span>{bio}</span>
                <span>{nationality}</span>
            </div>

        </section>
    )
}

export default CardWriter;