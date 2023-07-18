import React, { useEffect, useState } from "react";
import { CSSTransition,TransitionGroup } from "react-transition-group";
import './todo.css'
import Task from "./task";
export default function TodoElement(){
    const [list,setList] = useState([]);
    const[newItem,setNewItem] = useState("");
    const [toRemove, setToRemove] = useState(null);
    const [addButtonActive,setAddButtonActive] = useState(0);
    const[count,setCount] = useState(0)

    const handleClick =()=>{
        const newListItem = {id:count, name:newItem}
        setList([...list, newListItem])
        setNewItem("")
        setCount(count+1)
        setAddButtonActive(0)
    }
    const handleType =(e)=>{
      setNewItem(e.target.value)
    }
    const handleDelete =(id)=>{
        const newList = list.filter(item => item.id!==id)
        setToRemove(id);
        setTimeout(() => {
          setList(newList);
        }, 100);
      
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
    <TransitionGroup component="ul"  >
    
    {
        list.map((item)=>(
          <CSSTransition  classNames="fade" in={toRemove!==null && toRemove==item.id?'Enter':'Exit'} timeout={500}  >
        <li key={item.id}  id={item.id}>
        <div className="item-name"><Task name={item.name} id={item.id} status="done" handleDelete={handleDelete} /></div>
        </li>
        </CSSTransition>
                        )
                                )            
    }
    </TransitionGroup>
    </div>
  );

}