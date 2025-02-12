import React from 'react'

export default function Alert(props) {

    const capital = (word) =>{
        return word[0].toUpperCase()+word.slice(1)
    }

    return (
        props.alert && <div className='container my-3'>
             <div className={`alert alert-${props.alert.type}`} role="alert">
               <strong>{capital(props.alert.type)}</strong>,  {props.alert.msg}
            </div>
        </div>
    )
}
