import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'

function UpdatePost(props) {
    const navigate = useNavigate();
    let url = 'https://api-devto.herokuapp.com/post'
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
                setData(json.data.post);
                
            } catch (error) {
                console.log(error);
            }
        }
        getAll();
    },[])

    const updatePost = async (e)=>{
        e.preventDefault()

        try {
            const {image, article, title, tags} = data;
            let option ={
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({
                   "image": image,
                    "article": article,
                    "title": title,
                    "tags": tags
                })
            }
            let res = await fetch(`${url}/${params.id}`, option);
            let json = await res.json();
            console.log(res);
            if (!res.ok) throw {status: res.status, error: res.message}
    
            
            navigate('/post')
        } catch (error) {
            console.log(error.message);
            alert('You have not permission to update Post')
            navigate('/post')
        }
        
    }

    const onChange = (e) =>{
        let tag = '';
        let tags
        if(e.target.name === 'tags'){
            
            tags = e.target.value
            tag = tags.split(',')
        }
        
        setData({
            ...data,
            [e.target.name]: e.target.value,
            "tags": tag
            
        })
        
    }

  
    

    return (
        <>
        <h3>Actualizar Post</h3>
        <Form onSubmit={updatePost}>
  <Form.Group className="mb-3" controlId="formBasicTitle">
    <Form.Label>Title:</Form.Label>
    <Form.Control onChange={onChange} type="text" name="title" placeholder="Enter a title.." value={data.title} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicImage">
    <Form.Label>Poster Image</Form.Label>
    <Form.Control onChange={onChange} type="text" name="image" placeholder="Url image..." value={data.image}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicArticle">
    <Form.Label>Article:</Form.Label>
    <Form.Control onChange={onChange} type="text" name="article" placeholder="Enter your Article..."  value={data.article}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicTags">
    <Form.Label>Tags:</Form.Label>
    <Form.Control onChange={onChange} type="text" name="tags" placeholder="Enter your Tags..."  value={data.tags}/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Update
  </Button>
</Form>
        </>
    )
  }


  export default UpdatePost;