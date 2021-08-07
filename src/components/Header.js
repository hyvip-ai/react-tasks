import React, { useState } from 'react'
import Addtask from './Addtask'

import Button from './Button'
import Tasks from './Tasks'
function Header() {
    
    const [tasks, settasks] = useState([{id:1,name:"appointment",time:"friday from 2pm",remain:true},{id:2,name:"meeting",time:"Saturday from 3",remain:true},{id:3,name:"Movie",time:"Sunday whole day",remain:false}])
    const [showform, setform] = useState(false)
    function deletetasks(id){
        console.log(id)
        var array = [...tasks]
        for(let i=0;i<array.length;i++){
            if(array[i].id===id){
                array.splice(i,1);
            }
        }
        settasks(array)
        console.log(array)
    }
    function toogletask(id){
        // console.log(id)
        var newarray = [...tasks]
        for(let item of newarray){
            if(item.id === id){
                item.remain = !item.remain
            }
        }
        settasks(newarray)
    }
      return (
        <header>
            <h1>Task Manager</h1>
            <Button color="black" show={setform} prev={showform}/>
            {showform?<Addtask setmaintask={settasks} fromvis={setform}/>:null}
            {!showform?<Tasks tasks ={tasks} del={deletetasks} tog={toogletask}/>:null}
           
        </header>
    )
}

export default Header
