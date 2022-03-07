import React,{useReducer,useEffect} from 'react'
import axios from 'axios';
   const initialState={
       loading:true,
       error:'',
       post:{}
   }
   const reducer=(state,action)=>{
       switch(action.type){
           case 'FETCH_SUCCESS':
               return {
                   loading:false,
                   post:action.payload,
                   error:''
               }
            case 'FETCH_FAILED':
               return {
                   loading:false,
                   post:{},
                   error:'SOMETHING WENT WRONG'
               }
               default:
                   return state
       }
   }
function DataFetching2() {

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_FAILED'})
        })
    })

    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
             {state.loading?'loading':state.post.title}
            {state.error?state.error:null}
        </div>
    )
}

export default DataFetching2
