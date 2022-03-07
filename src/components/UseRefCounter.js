import React,{useState,useEffect,useRef}from 'react'

function UseRefCounter() {
    const [count,setCount]=useState(0)
    const interval=useRef(null)
    useEffect(()=>{
     interval.current=setInterval(()=>{
       setCount(prevCount=>prevCount+1)
    },1000)
    return()=>{
        clearInterval(interval.current)
    }
},[])

    return (
        <div>
          Hook Timer -- {count} 
          <button onClick={()=>clearInterval(interval.current)}>Stop the timer</button>
        </div>
    )
}

export default UseRefCounter
