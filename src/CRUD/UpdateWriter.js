import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'


function UpdateWriter(props){
    const navigate = useNavigate();
    let url = 'https://api-devto.herokuapp.com/writer'
    const {token} = props;
    const params = useParams()
    const [data , setData] = useState({});

    useEffect(()=>{
        const getAll = async()=>{
            try {
                let res = await fetch(`${url}/${params.id}`, {headers: {
                    
                    "Authorization": token
                }});
                let json = await res.json();
    
                if (!res.ok) throw {status: res.status, error: res.message}
                setData(json.data.writer);
                
            } catch (error) {
                console.log(error);
            }
        }
        getAll();
        
    },[])
    const update = async (e)=>{
        e.preventDefault()

        try {
            const {name, avatar, bio, email, nationality} = data;
            let option ={
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({
                   "name": name,
                    "avatar": avatar,
                    "bio": bio,
                    "email": email,
                    "nationality": nationality
                })
            }
            let res = await fetch(`${url}/${params.id}`, option);
            let json = await res.json();
            
            if (!res.ok) throw {status: res.status, error: res.message}
    
            
            navigate('/writers')
        } catch (error) {
            
            alert('You have not permission to update this Writer')
            navigate('/writers')
        }
        
    }
    const onChange = (e) => {
        
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        
    }
    
    
    return (
        
        <Form onSubmit={update}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control onChange={onChange} type="name" name="name" value={data.name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAvatar">
        <Form.Label>Avatar:</Form.Label>
        <Form.Control onChange={onChange} type="avatar" name="avatar" value={data.avatar} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBiography">
        <Form.Label>Biography:</Form.Label>
        <Form.Control onChange={onChange} name="bio" as="textarea" rows={3} value={data.bio} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNationality">
        <Form.Label>Nationality:</Form.Label>
        <Form.Control onChange={onChange}  name="nationality" value={data.nationality} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control onChange={onChange} type="email" name="email" value={data.email} />
      </Form.Group>
      
      
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    )
}

export default  UpdateWriter