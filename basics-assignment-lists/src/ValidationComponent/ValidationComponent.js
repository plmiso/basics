import React from 'react'

const validationComponent = (props) => {
    let validationResultText = 'Text is too short, should be at least 5 char'
    if (props.textLength >= 5) {
        validationResultText = 'Text is long enough'
    }
    return(
        <div>{validationResultText}</div>
    )
}

export default validationComponent