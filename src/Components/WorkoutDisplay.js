import React from 'react'

const WorkoutDisplay = ( props ) => {
    return(
        <div className="workout-box">
            <div className="exercise" style={{ visibility: props.workout[0] ? 'visible' : 'hidden' }} >{props.workout[0]}</div><br/>
            <div className="exercise" style={{ visibility: props.workout[1] ? 'visible' : 'hidden' }} >{props.workout[1]}</div><br/>
            <div className="exercise" style={{ visibility: props.workout[2] ? 'visible' : 'hidden' }} >{props.workout[2]}</div><br/>
            <div className="exercise" style={{ visibility: props.workout[3] ? 'visible' : 'hidden' }} >{props.workout[3]}</div><br/>
            <div className="exercise" style={{ visibility: props.workout[4] ? 'visible' : 'hidden' }} >{props.workout[4]}</div><br/>
            <div className="exercise" style={{ visibility: props.workout[5] ? 'visible' : 'hidden' }} >{props.workout[5]}</div>
        </div>
    )
}

export default WorkoutDisplay