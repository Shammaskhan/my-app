import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function TextForm(props)
{   
    const handleToUpClick= ()=>{
        console.log("on click " + text)
        setText(text.toUpperCase())
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" convert to upper case","success ");
        
    }
    const handleToLoClick =()=>{
        console.log('on click'+text);
        setText(text.toLocaleLowerCase());
        props.showAlert(" convert to lower case","success ");
        
    }
    const handleOnChange= (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const clearText=()=>{
        setText("");
        props.showAlert(" text cleared","success ");
        
    }
    let [text,setText]=useState("enter text here?");
    return(
        <div>
        <>
        <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
           <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(52 54 48)':'white',color:props.mode==='light'?'black':'white'}}></textarea>
           <button className="btn btn-primary mx-1 my-1" onClick={handleToUpClick}>convert to uppercase</button>
           <button className="btn btn-primary mx-1 my-1" onClick={handleToLoClick}>convert to lowercase</button>
           <button className="btn btn-primary mx-1 my-1" onClick={clearText}>clear text</button> 
           <h2>your text summary</h2>
           <p>{text.length} word {text.split(" ").filter((element)=>{return (element.length!==0)}).length} sentence</p>
           <h2>preview</h2>
           <pre style={{color:props.mode==='light'?'black':'white'}}>{text}</pre>
        </div>

        </>
        </div>
     )
}

TextForm.propTypes={
    heading:PropTypes.string
}