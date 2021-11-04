import React from 'react'

const Form = ( props ) => {
    return (
        <form className='form' >
            <label className='form-title'>{props.title}</label><br/>
                    <input 
                        type='radio'
                        name='radio'
                        value='low' 
                        onChange={props.onChange}
                    />Low<br/>          
                    <input 
                        type='radio'
                        name='radio' 
                        value='medium' 
                        onChange={props.onChange} 
                    />Med<br/>                   
                    <input 
                        type='radio' 
                        name='radio'
                        value='high' 
                        onChange={props.onChange} 
                    />High<br/>   
        </form>
        )}

export default Form