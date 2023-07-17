import React, { useState } from "react";
import './todo.css'
import Task from "./task";
export default function TodoElement(){
    const [list,setList] = useState([]);
    const[newItem,setNewItem] = useState("");
    const [addButtonActive,setAddButtonActive] = useState("hidden");

    const handleClick =()=>{
        const newListItem = {id:Math.random()*1000,name:newItem}
        setList([...list, newListItem])
        setNewItem("")
        setAddButtonActive("hidden")
    }
    const handleType =(e)=>{
      setAddButtonActive("visible")
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
    <div className="header-container">
    <input type = 'text' placeholder='Add Something' value={newItem} onChange={handleType}/>
    <button style={{visibility:{addButtonActive}}} onClick={handleClick}>➕</button>
    </div>
    {/*list*/}
    <ul className="list-unstyled">
    {
        list.map((item)=>(
        <li key={item.id}>
        <div className="item-name"><Task name={item.name} id={item.id} status="done" handleDelete={handleDelete} /></div>
        </li>
                        )
                                )
    }
    </ul>
    </div>
  );

}