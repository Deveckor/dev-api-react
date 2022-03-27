import React from 'react';
import { Link} from 'react-router-dom'
require('./CardWriter.scss')


function CardWriter(props) {
    
    const {avatar, bio, nationality, name, id} = props;

    return (
        <section className="card mt-4 p-4">
            <div className=" header-card">
                <img className="img-Writer" alt="Profile" src={avatar} />
               
            </div>
            <div className="d-flex mt-4 flex-column">
                <span className="fw-bold text-muted">Name:</span>
                <span className="name " >{name}</span>
                <span className="fw-bold text-muted">Bio:</span>
                <span>{bio}</span>
                <span className="fw-bold text-muted">Nationality:</span>
                <span>{nationality}</span>
            </div>
            <div className="text-center">
            <Link to={`/updateWriter/${id}`}>
            <button  className="mt-4 btn-update">Update</button>
            </Link>
            </div>
        </section>
    )
}

export default CardWriter;