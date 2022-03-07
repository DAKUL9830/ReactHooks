import React,{useState} from 'react'

function HookWithArrays() {
    const [items,setItems]=useState([]);

    function generateNum(){
       setItems([...items,{
           id:items.length,
           value:Math.floor(Math.random()*10)+1
       }])
    }

    return (
        <div>
            <button onClick={generateNum}>Возможные сроки</button>
            <ul>Ты поддерживаешь санкции против Луки?
                <br/>
                 Да
                {items.map(item=>(
                <li key={item.id}>{item.value} лет</li>
                ))} 
            </ul>
            
        </div>
    )
}

export default HookWithArrays
