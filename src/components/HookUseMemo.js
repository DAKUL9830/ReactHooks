import React,{useState,useMemo} from 'react'


function HookUseMemo() {
    const [countOne,setCountOne]=useState(0)
    const [countTwo,setCountTwo]=useState(0)
    const incrementOne=()=>{
        setCountOne(countOne+1)
    }
    const incrementTwo=()=>{
        setCountTwo(countTwo+1)
    }
    const Even=useMemo(()=>{
    let i=0;
    while(i<2000000)
        i++
        return countOne%2===0
    
    },[countOne])
    return (
        <div>
        <div>
            <button onClick={incrementOne}>Count {countOne}</button>
              <span>{Even?"even":"odd"}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Count {countTwo}</button>
        </div>
        </div>
    )
}

export default HookUseMemo
