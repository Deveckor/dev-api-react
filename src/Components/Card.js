import React from 'react';



function Card(props) {

    const {img, nameProfile, title, time, tags} = props;

    
    return (
        <section className="card mt-4 p-4">
            <div className="div-head">
                <img className="img-profile " alt="Profile" src={img}/>
                <div className="info-card">
                    <a className="name-profile">{nameProfile}</a>
                    <span>{time}</span>
                </div>
            </div>
            <div className="container-card">
                <h2 className="sub-title">
                    <a href="#" >{title}</a>
                </h2>
            <div className="tags">
                
                    {tags.map((tag, index) => {

                        return <a key={index}  className="me-3">{`#${tag}`} </a>;
                    })}
                    
            </div>
            <div className="footer-card">
                <div className="fot-card-left">
                    <a ></a>
                    <a ></a>
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