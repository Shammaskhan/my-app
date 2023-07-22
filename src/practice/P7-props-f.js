/*import React from 'react'
 const P7=({name,heroName})=>{
    return(
        <div className='container'>
           <h3>{name} a.k.a {heroName}</h3>
        </div>
    )
}

export default */

import React from 'react'
 const P7=props=>{
    const {name,heroName}=props
    return(
        <div className='center'>
           <h3>{name} a.k.a {heroName}</h3>
        </div>
    )
}

export default P7