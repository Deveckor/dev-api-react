import React, {useState} from 'react';
import { Link} from 'react-router-dom'
import Comment from './Comment'
import CardComment from "./CardComment"
require('./Card.scss')


function  Card(props) {
    const [addComment, setaddComment] = useState(false);
    
    const {post, img, nameProfile, title, time, tags, reaction, comment, back, id, token} = props;
    
    let url = 'http://localhost:5000/post/reaction'
    
    
    
    


    const reactionPatch = async () =>{
        try {
            
            let options = {
                headers: {
                    "Authorization": token
                }
            }
            let res = await fetch(`https://api-devto.herokuapp.com/post/${id}`, options);
            let json = await res.json();

            let reaction = json.data.post.reaction;

            

    
            Reaction(reaction);
            
        } catch (error) {
            console.log(error);
        }
    }
    const Reaction = async (reaction)=>{
        try {
            let reac = reaction +1
            let option ={
                method: "PATCH",
                headers: {
                    
                    "Content-type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({"reaction": reac})
            }
            let res = await fetch(`${url}/${id}`, option);
            
            if (!res.ok) throw {status: res.status, error: res.message}
            
            
           
            window.location.reload(true)
        } catch (error) {
            console.log(error.message);
        }
    }
    const commentPatch = ()=>{
        setaddComment(true);
    }
    
    const confirmDelete = ()=>{
        const confirm = window.confirm(`Are you sure you want to delete this post`)

        if (confirm) {
            deletePost()
        }
    }
    const deletePost = async ()=>{
        

        try {
            let option ={
                method: "DELETE",
                headers: {
                    
                    "Authorization": token
                }
                
            }
            let res = await fetch(`https://api-devto.herokuapp.com/post/${id}`, option);
            
            if (!res.ok) throw {error: res.error}
            
            
            alert(`You´re Post ${id} are delete... `)
            window.location.reload(true)
        } catch (error) {
            
            alert('not authorized')
        }
    }
   
    return (
        <section className="card mt-4 p-1">
            <img src={back} alt={back}/>
            <div className="div-head m-3">
                <img className="img-profile " alt="Profile" src={img}/>
                <div className="info-card">
                    <a href="/post" className="name-profile">{nameProfile}</a>
                    <span>{time}</span>
                </div>
            </div>
            <div className="container-card">
                <h2 className="sub-title">
                    <a href="/post" >{title}</a>
                </h2>
            <div className="tags">
                
                    {tags.map((tag, index) => {

                        return <a href="/post" key={index} >{`#${tag}`} </a>;
                    })}
                    
            </div>
            <div className="footer-card mt-4 ">
                <div className="fot-card-left ">
                <button onClick={reactionPatch} className="btn-p">{`🤍 ${reaction}`}</button>
                <button onClick={commentPatch} className="btn-p">{`💬 ${comment.length}`}</button>
                    
                </div>
                <div className="fot-card-right">
                    <button onClick={confirmDelete} className="btn-save">Delete</button>
                    <Link to={`/updatePost/${id}`}>
                    <button className="btn-save">Update</button>
                    </Link>
                    
                </div>
            </div>
            </div>
            {(addComment)? <Comment
                token={token}
                id={id}
                setAddComment={setaddComment}
            />: null}
            {(comment.length)?
            <CardComment
            token={token}
            id={id}
            post={post}
            />
            :null
            }

        </section>
    )
}

export default Card;