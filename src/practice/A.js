import React from 'react'
import Img from './download.png'
import {useState} from 'react'
export default function A()
{   
    
    const fun=()=>{
        setImg1(<img src={Img} alt=" " width={100} height={100}/>)
    }
    const [img1,setImg1]=useState("click for image ");
    return(
        <div>
            <button onClick={fun}>{img1}</button>
        </div>
    )
}