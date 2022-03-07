import React,{useState,useEffect} from 'react'
import axios from 'axios';
function HooFetching() {

    const [post,setPost]=useState([]);
    const [id,setId]=useState(1);
    const [buttonId,setButtonId]=useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[buttonId]
    )
    const handleClick=()=>{
        setButtonId(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={handleClick}>Fetching Post</button>
            <div> {post.title}</div>
           {/* <ul>
               {posts.map(post=>(
                   <li key={post.id}>{post.title}</li>
    ))
    }</ul>  */}
        </div>
        
    )
}


export default HooFetching
