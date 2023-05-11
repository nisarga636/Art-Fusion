
import React from 'react'

function Input(props: { [x: string]: any; size?: "medium" | undefined }){
    const{size='medium',...rest} = props
    return(
        <input className={`input ${size}`} {...rest} />
    )
}

export default Input