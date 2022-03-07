import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [stateX,setStateX]=useState(0);
    const [stateY,setStateY]=useState(0);
   const mousePosition=e=>{
        setStateX(e.clientX)
        setStateY(e.clientY)
    }

  useEffect(()=>{
    console.log("useEffect called")
      window.addEventListener('mousemove', mousePosition)
     
      return()=>{
         console.log('unmount this')
         window.removeEventListener('mousemove', mousePosition)
      }
  },[])
    return (
        <div>
             <div>X - {stateX}   Y - {stateY}</div>
        </div>
    )
}

export default HookMouse
