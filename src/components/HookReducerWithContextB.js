import React,{useContext} from 'react'
import {CountContext} from '../App'

function HookReducerWithContextB() {
    const countContext=useContext(CountContext)
    return (
        
        <div>
              
            <div>Component B</div>
          <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
          <button onClick={()=>countContext.countDispatch('dicrement')}>Dicrement</button>  
          <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>    
        
        </div>
    )
}

export default HookReducerWithContextB
