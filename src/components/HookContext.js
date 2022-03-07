import React,{useContext}from 'react';
import {NameContext,DateContext} from '../App';
function HookContext() {
    const name=useContext(NameContext)
    const date=useContext(DateContext)
    
    return (
        <div>
            My name is {name}, I was born on {date}
        </div>
    )
}

export default HookContext
