const Button = ( props ) => {
    return(
        <button 
            className='btn-default' 
            onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default Button
