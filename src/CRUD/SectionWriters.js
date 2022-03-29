import React, {useState, useEffect}from 'react';
import CardWriter from '../Components/CardWriter';


const url = 'https://devto-api.herokuapp.com/writer'

function SectionWriters() {
    const [writer, setWriters] = useState([]);


    useEffect(() =>{
        const getWriters = async () => {
            try {
                let res = await fetch(url);
                let json =await res.json();
                
                if (!res.ok) throw new Error({status: res.status, statusText: res.error})
                let data = json.data.writers;
                setWriters(data)
                
            } catch (error) {
                return (
                    <h2>{error}</h2>
                )
            }
        }

        getWriters();
    },[])


    return(
        <div className="mt-4">
            {writer.map(writer =>{
                return (

                    <CardWriter
                    key={writer._id}
                    avatar={writer.avatar}
                    bio={writer.bio}
                    nationality={writer.nationality}
                    name={writer.name}
                    id={writer._id}
                    />
                    )
                })}
        </div>
    )
}

export default SectionWriters;