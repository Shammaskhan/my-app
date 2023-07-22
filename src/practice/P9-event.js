import React from 'react'

function P9(){
   /* const  handleClickEvent=()=>{
        console.log("clicked.")
    } */
    function handleClickEvent(){
        console.log("clicked")
    }
    return(
        <div>
          <button onClick={handleClickEvent}>click!</button>
        </div>
    )
}

export default P9

