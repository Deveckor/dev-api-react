import React from 'react';



function Card(props) {

    const {img} = props;

    return (
        <section className="card">
            <div className="div-head">
                <img className="img-profile img-Card" alt="Profile" src={img}/>
                <div className="info-card">
                    <a className="name-profile nameProfile"></a>
                    <span className="time"></span>
                </div>
            </div>
            <div className="container-card">
                <h2 className="sub-title">
                    <a href="#" className="tittleCard"></a>
                </h2>
            <div className="tags">

            </div>
            <div className="footer-card">
                <div className="fot-card-left">
                    <a className="reaction"></a>
                    <a className="comment"></a>
                </div>
                <div className="fot-card-right">
                    <button className="btn-save">Delete</button>
                    <button className="btn-save">Update</button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Card;