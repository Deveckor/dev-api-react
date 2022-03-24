import {Form, Button} from 'react-bootstrap'
import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login(props){
    let navigate = useNavigate();
    const {setToken, setIsLogin, isLogin} = props;
    
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const url = 'https://vercel.com/deveckor/api-dev-to/writer/login';


    const loginApi = async (e) =>{
        e.preventDefault();
        
                
        
                let option = {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(login)
                }
                let res = await fetch(url, option);
                let json = await res.json();
                
                setToken(json.data.token);
                
                setIsLogin(true);
                navigate('/');
                
            

            
            
        }

    const onChange = (e)=>{
        
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        });
        
    }

    return (
        <Form className="card p-4 mt-4" onSubmit={loginApi}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    name="email"
    placeholder="Enter email" 
    onChange={onChange}
    />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    name='password'
    placeholder="Password" 
    onChange={onChange}
    />
  </Form.Group>
 
        

  <Button variant="primary" type="submit">
    Submit
  </Button>
        
  
</Form>
    )
}

export default Login;