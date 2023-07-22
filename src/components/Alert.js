import React from 'react'
//import PropTypes from 'prop-types'

export default function Alert(props)
{   
    const capatilize=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
    return(
        
            props.alert && <div className="alert alert-primary" role="alert">
              <p><strong>{capatilize(props.alert.type)}:</strong>{props.alert.msg}&#9888;</p>
            </div>
        
    )
}
