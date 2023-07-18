import React, { useRef, useState,useEffect } from "react";
import "./task.css"

export default function Task(props){
    const [name,setName] = useState(props.name)
    const[id] = useState(props.id)
    const[status,setStatus]=useState(props.status)
    const[newName,setNewName] =useState("")
    const handleDelete = props.handleDelete;
    const refEdit = useRef(null)
    
    useEffect(() => {
        if (status === "edit") {
          refEdit.current.focus();
        }
      }, [status]);

    const handleEdit = (e)=>{
        setNewName(e.target.value)
    }
    const handleSubmit=(e)=>{
        setName(newName)
        setStatus('done');
    }
    if(status==='edit'){
        return(
    <div class='container'>
    <div class='inputContainer'><input type='text' ref={refEdit}  value={newName} onChange={handleEdit}/>
    </div>
    <div class = 'buttons container'>
    <button id ='submitButton' onClick={()=> handleSubmit(id)}>✔️</button>
    <button id='deleteButton' onClick={()=> handleDelete(id)}>❌</button>
    </div>
    </div>
        )
    }

    if(status==='done'){
return(
    <div class='container'>
    <div id='name'>{name}</div>
    <div class = 'buttons container'>
    <button id ='ediButton' onClick={()=> {setNewName(name); setStatus('edit')} }>🖊</button>
    <button id='deleteButton' onClick={()=> handleDelete(id)}>❌</button>
    </div>
    </div>
    )
    }
    
}