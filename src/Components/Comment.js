import {Form, Button} from 'react-bootstrap'
import React, { useState} from 'react'


const Comment = (props) => {
    const url = 'https://devto-api.herokuapp.com/post/comment/';
    const {token, id, setAddComment} = props;
    const [comment, setComment] = useState({});

    const createComment = async (e) =>{
        e.preventDefault();
        try {
            let option = {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify(comment)
            }
    
            let res = await fetch(`${url}${id}`, option);
            

            if(!res.ok) throw {status: res.status, error: res.message }
            setAddComment(false)
            window.location.reload(true)
        } catch (error) {
            console.log(error);
        }
    }
    const onChange = (e)=>{
        
        setComment({
           
            [e.target.name]: e.target.value
        });
        console.log(comment);
    }

    const cancel = (e)=>{
        console.log(e.target);
        setComment(false)
        window.location.reload(true)

    }
    return (
        <Form className="card p-4 mt-4" onSubmit={createComment}>
    

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Comment:</Form.Label>
    <Form.Control 
    as="textarea" rows={3}
    name="content"
    onChange={onChange}
    />
  </Form.Group>
 
        

  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button className="mt-4" variant="primary" onClick={cancel}>
    Cancel
  </Button>

  
</Form>
    )
}


export default Comment

// comentario