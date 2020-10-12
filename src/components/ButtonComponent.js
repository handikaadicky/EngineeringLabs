import React from 'react'
import {Button} from 'reactstrap'

function ButtonComponents({buttonColor, buttonText}) {
    return (
        <div>
            <Button block={true} color={buttonColor}>{buttonText}</Button>
        </div>
    )
}

export default ButtonComponents
