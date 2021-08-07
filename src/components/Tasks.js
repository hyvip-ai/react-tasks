import React from 'react'
import Task from './Task'

function Tasks({tasks,del,tog}) {
    return (
       tasks.length>0? tasks.map((item)=>{return <Task key={item.id} value={item} toogle={tog} deltask={del}/>}) : <h4>No Tasks Available</h4>
    )
}

export default Tasks
