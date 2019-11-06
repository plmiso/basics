import React from 'react'

const userOutput = ( props ) => {
    return(
        <div style={props.style}>
            <p>{props.name}</p>
            <p>{props.language}</p>
            <p>{props.experience}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default userOutput