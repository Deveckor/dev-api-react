import React from 'react'
import Card from '../../Components/Card'

function CardSection(props) {
    const {post} = props
    
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

export default CardSection