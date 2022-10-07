import React from 'react'

export default function Alert(props) {
    const Capitalize=(word)=>{
    if(word==='danger'){
        word='error'
    }
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

    return (
        <div style={{height:'70px'}}>
        {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert" >
            {Capitalize(props.alert.type)} : {props.alert.msg}
        </div>}
        </div>
    )
}