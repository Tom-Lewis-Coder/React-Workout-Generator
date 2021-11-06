import React from 'react'

const WorkoutDisplay = ( props ) => {
    return(
        <div className="workout-box">
            <div className="exercise" >{props.workout.map(ex => <div className='ex'>{ex}</div>)}</div>
        </div>
    )
}

export default WorkoutDisplay