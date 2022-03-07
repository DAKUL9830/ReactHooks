import React,{useState} from 'react'
import HookMouse from './HookMouse.js'

function HookMouseContainer() {

    const [display,setDisplay]=useState(true);

    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle it</button>
            {display&&<HookMouse/>}
        </div>
    )
}

export default HookMouseContainer
