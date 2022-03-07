import React,{useReducer} from 'react'
const initialState={
    firstCounter:0,
    secondCounter:15
};
const reducer=(state,action)=>{
   switch(action.type){
       case 'increment':
          
           return {...state,firstCounter:state.firstCounter +action.value}
         
        case 'dicrement':
           return {...state,firstCounter:state.firstCounter -action.value}
        case 'increment2':
           return {...state,secondCounter:state.secondCounter +action.value}
        case 'dicrement2':
           return {...state,secondCounter:state.secondCounter -action.value}
        case 'reset':
           return initialState;
        default:
            return state
   }
}

function HookUseReducer2() {
    const [count,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <div>{count.firstCounter}</div>
            <div>{count.secondCounter}</div>
            
          <button onClick={()=>dispatch({type:'increment',value:1})}>Increment </button>
          <button onClick={()=>dispatch({type:'dicrement',value:1})}>Dicrement</button> 
          <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
          <button onClick={()=>dispatch({type:'dicrement',value:5})}>Dicrement 5</button> 
          <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment counter2</button>
          <button onClick={()=>dispatch({type:'dicrement2',value:1})}>Dicrement counter2</button> 
          <button onClick={()=>dispatch({type:'reset'})}>Reset</button>    
        </div>
    )
}

export default HookUseReducer2