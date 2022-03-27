import {useState, useEffect} from "react"


function CardComment(props) {
    
    const {post} = props;

    
    let comment = post.comment;
    
    
    return (
        <>
            {
                comment.map(el => {
                    return (
                        <div className="card p-2">
                       <div className="div-header">
                           <img className="img-profile" alt="profile" src={el.name.avatar}/>
                           <div className="d-flex flex-column">
                    <span className=" ">{el.name.name}</span>
                    {(!el.content)?null:
                    
                    <div className="card p-2">

                    <span>{el.content}</span>
                    </div>
                    }
                </div>
                       </div>
                       </div>
                   )
                })
            }
        
        </>
        
    )
}

export default CardComment;