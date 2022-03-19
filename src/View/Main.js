import React, {useState, useEffect} from 'react';
import Card from '../Components/Card';




const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjZjNzA0NmQ0ZWYzYTQ4YTg3YmVkNCIsImlhdCI6MTY0NzU3ODYwMywiZXhwIjoxNjQ4MTgzNDAzfQ.LLCD6xM_9k1r_hAqiPqTsy2x1J5R1z_XiSIL1OwnU6E'
const url = 'http://localhost:8080/post/'
function Home() {

    const [post, setPost] = useState([]);
    const [login, setLogin] = useState(false);

    useEffect(()=>{
        let option = {
            method: 'GET',
            headers: {
                "Authorization": token
            }
        }
        const getAll = async ()=>{
            try {
                
                let res = await fetch(url, option);
                let json = await res.json();

                if(!res.ok) throw {status: res.status, statusText: res.error}
                let data = json.data.post;
                setPost(data);
                setLogin(true)
                
            } catch (error) {
                console.log(error);
            }
            
        }
        
        getAll()
    },[])
    
   
    
   
    return(
        <div className="mt-3">
            {post.map(post =>{
                
                let da = post.createdAt,
                n = da.split('-'),
                w = n[2].substring(0, 2)
                n.pop();
                n.push(w)
                let date = new Date(n[0],n[1],n[2]),
                newDate = date.toUTCString().split(' '),
                dateTwo = `${newDate[1]} ${newDate[2]} ${newDate[3]}`
                

                return (
                    <Card 
                    key={post._id}
                    img={post.author.avatar}
                    nameProfile={post.author.name}
                    title={post.title}
                    time={dateTwo}
                    tags={post.tags}
                    
                    />
                )
            })}
        </div>
        
            
        
        
    )
}

export default Home;