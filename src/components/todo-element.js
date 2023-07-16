import React, { useState } from "react";
import './todo.css'
export default function TodoElement(){
    const [list,setList] = useState([]);
    const[newItem,setNewItem] = useState("");

    const handleClick =()=>{
        const newListItem = {id:Math.random()*1000,name:newItem}
        setList([...list, newListItem])
        setNewItem("")
    }
    const handleType =(e)=>{
        setNewItem(e.target.value)
    }
    const handleDelete =(id)=>{
        const newList = list.filter(item => item.id!==id)
        console.log('deleted')
        setList(newList)
    }
  return(
    <div>
    {/*header*/}
    <header>Todo!</header>
    {/*input */}
    <input type = 'text' placeholder='Add Something' value={newItem}onChange={handleType}/>
    <button onClick={handleClick}>+</button>
    {/*list*/}
    <ul>
    {
        list.map((item)=>(
        <li key={item.id}>{item.name}<button onClick={()=> handleDelete(item.id)}>delete</button></li>
                        )
                                )
    }
    </ul>
    </div>
  );

}