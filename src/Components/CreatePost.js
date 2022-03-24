import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import {Form, Button} from 'react-bootstrap'

function CreatePost(props) {
    let navigate = useNavigate();
    const { token} = props;
    const [data , setData] = useState({reaction:0});
    const onChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

   
        
        let url = 'https://vercel.com/deveckor/api-dev-to/post/';



        const createPost = async ()=>{

            try {
                let option ={
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": token
                    },
                    body: JSON.stringify(data)
                }
    
                let res = await fetch(url, option);
                

               if (!res.ok) throw {status: res.status, error: res.message }
                alert('Post is created')
                navigate('/post');
            } catch (error) {
                navigate('/notFound')
            }



        }
        const onSubmit = (e)=>{
            e.preventDefault()
            createPost()
        }




    return(
        <Form onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="formBasicTitle">
    <Form.Label>Title:</Form.Label>
    <Form.Control onChange={onChange} type="text" name="title" placeholder="Enter a title.." />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicImage">
    <Form.Label>Poster Image</Form.Label>
    <Form.Control onChange={onChange} type="text" name="image" placeholder="Url image..." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicArticle">
    <Form.Label>Article:</Form.Label>
    <Form.Control onChange={onChange} type="text" name="article" placeholder="Enter your Article..." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicTags">
    <Form.Label>Tags:</Form.Label>
    <Form.Control onChange={onChange} type="text" name="tags" placeholder="Enter your Tags..." />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
    
}

export default CreatePost