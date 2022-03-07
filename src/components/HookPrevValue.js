import React,{useState} from 'react'

function HookPrevValue() {
    let initialValue=0
    const [count,setCount]=useState(initialValue)
    const incrementFive=()=>{
       
        for(let i=0;i<5;i++){
            setCount(prev=>prev+1)
            
        }
    }
       
    

    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount(initialValue)}>Reset</button>
            <button onClick={()=>{
                if(count<1)
                setCount(count+1)
                else
                setCount(initialValue)
            }
                
                }>Increment</button>
            <button onClick={()=>setCount(count-1)}>Dicrement</button>
            <button onClick={incrementFive}>Increment 5</button>
            
        </div>
        
    )
}

export default HookPrevValue
