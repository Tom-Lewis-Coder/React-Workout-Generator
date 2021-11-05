import React from 'react'

const Form = ( props ) => {
    return (
        <form className='form' >
            <label className='form-title'>{props.title}</label><br/><br/>
                <input 
                    id='low'
                    type='radio'
                    name='radio'
                    value='low' 
                    onChange={props.onChange}
                /><label className='radio' >Low</label><br/>                              
                <input 
                    id='medium'
                    type='radio'
                    name='radio' 
                    value='medium' 
                    onChange={props.onChange} 
                /><label className='radio' >Med</label><br/>                   
                <input
                    id='high'                       
                    type='radio' 
                    name='radio'
                    value='high' 
                    onChange={props.onChange} 
                /><label className='radio' >High</label> 
            <p>Complete one circuit 3 times or change each time for a variation. Rest 1 min between circuits</p>
        </form>
        )}

export default Form