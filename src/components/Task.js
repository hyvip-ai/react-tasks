import React from 'react'
import { FaTimes } from 'react-icons/fa'
import '../index.css'
 
function Task({value,deltask,toogle}) {
  
    return (
      <div className={value.remain?"reminder task":"task"} onDoubleClick={()=>toogle(value.id)}>
           <h3>{value.name}  <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>deltask(value.id)}/>
           
           </h3>
           <p>{value.time}</p>
      </div>
    )
}

export default Task
