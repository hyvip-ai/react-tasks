import React, { useState } from 'react'
import '../index.css'
import uuid from 'uuid/dist/v4'

function Addtask({setmaintask,fromvis}) {
    const [task, settask] = useState("")
    const [date, setdate] = useState("")
    const [reminder, setreminder] = useState(false)
    function getData(){
        var mydata={
            id:uuid(),
            name:task,
            time:date,
            remain:reminder
        }
        console.log(mydata)
        setmaintask((prevs)=>{
            console.log(prevs)
            var newarr = [...prevs];
           
            // console.log(mydata)
            newarr.push(mydata)
            // console.log(newarr)
            setmaintask(newarr)
        })
        setdate("")
        setreminder(false)
        settask("")
        fromvis(false)
    }
    return (
       <form className="add-form">
           <div className="form-control">
               <label htmlFor="">Task</label>
               <input type="text" placeholder="Add Task ..." value={task} onChange={(e)=>{settask(e.target.value)}} />
           </div>
           <div className="form-control">
               <label htmlFor="">Day & Time</label>
               <input type="text" placeholder="Set Date and Time ..." value={date} onChange={(e)=>{setdate(e.target.value)}}/>
           </div>
           <div className="form-control form-control-check">
               <label htmlFor="">Set Reminder</label>
               <input type="checkbox" checked={reminder} onChange={(e)=>{
                   
                   setreminder(e.target.checked)}}/>
           </div> 
          <input type="button" className="btn btn-block" value="Save Task" onClick={getData}/>
       </form>
    )
}

export default Addtask
