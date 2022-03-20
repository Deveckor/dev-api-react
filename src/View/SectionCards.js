import React, {useState, useEffect} from 'react';
import Card from '../Components/Card';





const url = 'http://localhost:8080/post/'
function SectionCards(props) {
    const {token} = props;
    const [post, setPost] = useState([]);
    

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
                    reaction={post.reaction}
                    comment={post.comment}
                    back={post.image}
                    />
                )
            })}
        </div>
        
            
        
        
    )
}

export default SectionCards;