import React from 'react'
import './CharComponent.css'

const charComponent = (props) => {
    return(
        <div className="CharComponent">
            <h1 onClick = {props.click}>{props.character}</h1>
        </div>
    )
}

export default charComponent