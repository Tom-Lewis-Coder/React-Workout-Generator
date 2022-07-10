import React from 'react'

const Form = ( props ) => {
    return (
        <form className='form' >
            <div className='form-title'>{props.title}</div><br/>
                <input 
                    id='low'
                    type='radio'
                    name='radio'
                    value='low' 
                    onChange={props.onChange}
                /><label className='radio' for='low' >Low</label>                              
                <input 
                    id='medium'
                    type='radio'
                    name='radio' 
                    value='medium' 
                    onChange={props.onChange} 
                /><label className='radio' for='medium' >Med</label>                   
                <input
                    id='high'                       
                    type='radio' 
                    name='radio'
                    value='high' 
                    onChange={props.onChange} 
                /><label className='radio' for='high' >High</label> 
            <p>Complete one circuit 3 times or change each time for a variation. Rest 1 min between circuits</p>
        </form>
        )}

export default Form