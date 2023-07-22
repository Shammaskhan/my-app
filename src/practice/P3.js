import React from 'react'

const Greet=(props)=>{
    return(
    <div className='center'>
      <h1>{props.name} aka {props.heroName}</h1>
    </div>
    )
}
export default Greet;