import React, { useState} from "react";
import { Form, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

function CreateAccount(props) {
  let navigate = useNavigate();
    
    const url = 'https://devto-api.herokuapp.com/writer/signup'
    const [writer, setWriter] = useState({
        
    })

    const onChange = (e) => {
        
        setWriter({
            ...writer,
            [e.target.name]: e.target.value
        })
        
    }
    
    const createAccount = async (e) => {
      
        e.preventDefault();
        try {
            let options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(writer)
            }
            let res = await fetch(url, options);
            
            

            if(!res.ok) throw {status: res.status, message: res.statusText}
            
            alert('Successfully created')
            navigate('/writers')
            
        } catch (error) {
            alert(error)
        }
    }




  return (
    <Form onSubmit={createAccount}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control onChange={onChange} type="name" name="name" placeholder="Enter your name..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAvatar">
        <Form.Label>Avatar:</Form.Label>
        <Form.Control onChange={onChange} type="avatar" name="avatar" placeholder="Enter your avatar..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBiography">
        <Form.Label>Biography:</Form.Label>
        <Form.Control onChange={onChange} name="bio" as="textarea" rows={3}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNationality">
        <Form.Label>Nationality:</Form.Label>
        <Form.Control onChange={onChange}  name="nationality" placeholder="Enter your nationality..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control onChange={onChange} type="email" name="email" placeholder="Enter your email..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control onChange={onChange} type="password" name="password" placeholder="Enter your password..." />
      </Form.Group>
      
     
      <Button variant="primary" type="submit"
      disabled={
        !writer.name || !writer.avatar || !writer.bio || !writer.nationality || !writer.email || !writer.password
      }
      >
        Submit
      </Button>
      
    </Form>
  );
}

export default CreateAccount;