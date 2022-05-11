import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const WorkoutDisplay = ( props ) => {
    return(
        <div className="workout-box">
            <div className="exercise" >{props.workout.map(ex => <div key={uuidv4()} className='ex'>{ex}</div>)}</div>
        </div>
    )
}

export default WorkoutDisplay