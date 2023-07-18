import React, { useState } from "react";
import './todo.css'
import Task from "./task";
export default function TodoElement(){
    const [list,setList] = useState([]);
    const[newItem,setNewItem] = useState("");
    const [addButtonActive,setAddButtonActive] = useState(0);

    const handleClick =()=>{
        const newListItem = {id:Math.random()*1000, name:newItem}
        setList([...list, newListItem])
        setNewItem("")
        setAddButtonActive(0)
    }
    const handleType =(e)=>{
   
      setNewItem(e.target.value)
    }
    const handleDelete =(id)=>{
        const newList = list.filter(item => item.id!==id)
        // const ul = document.getElementById('list-unstyled').getelementby
        const li = document.getElementById(id)
        li.style.opacity=0
        setTimeout(() => {
          setList(newList)
        }, 900);
    }
    
  return(
    <div>
    {/*header*/}
    <header>Todo!</header>
    {/*input */}
    <div className="header-container">
    <input type = 'text' placeholder='Add Something' value={newItem} onFocus={()=>{setAddButtonActive(1)}} onBlur={()=>{if(newItem.length===0) setAddButtonActive(0)}} onChange={handleType}/>
    <button style={{opacity:addButtonActive}} onClick={handleClick}>➕</button>
    </div>
    {/*list*/}
    <ul id="list-unstyled">
    {
        list.map((item)=>(
        <li key={item.id} id= {item.id}>
        <div className="item-name"><Task name={item.name} id={item.id} status="done" handleDelete={handleDelete} /></div>
        </li>
                        )
                                )
    }
    </ul>
    </div>
  );

}