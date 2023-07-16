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
    <ul className="list-unstyled">
    {
        list.map((item)=>(
        <li key={item.id}>
        <div className="item-name">{item.name}</div>
        <button onClick={()=> handleDelete(item.id)}>❌</button>
        </li>
                        )
                                )
    }
    </ul>
    </div>
  );

}