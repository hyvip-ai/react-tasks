import React from 'react'

function Button(props) {
    function showform(){
         props.prev? props.show(false) : props.show(true) 
    }
    return (
        
        <button className="btn" style={{backgroundColor:props.color}} onClick={showform}>{props.prev? "Show Tasks" : "Add Tasks" }</button>
      
    )
}



export default Button
