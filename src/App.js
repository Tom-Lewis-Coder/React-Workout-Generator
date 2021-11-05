import React, { useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Button from './Components/Button'
import WorkoutDisplay from './Components/WorkoutDisplay'
import ExerciseList from './ExerciseList'
import './Components/Styles.css'

function App() {

  const [ workout, setWorkout ] = useState([])
  const [ difficulty, setDifficulty ] = useState('medium')

  const getDifficulty = (e) => {
    setDifficulty(e.target.value)
  }

  const getWorkout = () => { 
    difficulty === 'low' ? setWorkout(ExerciseList[0].map(subArr => subArr[Math.floor(Math.random() * subArr.length)])) : 
    difficulty === 'medium' ? setWorkout(ExerciseList[1].map(subArr => subArr[Math.floor(Math.random() * subArr.length)])) :
    setWorkout(ExerciseList[2].map(subArr => subArr[Math.floor(Math.random() * subArr.length)]))
  }

  return (
    <div className='container' >
      <Header title={'Random Workout Generator'} />
      <Form title={'Choose Difficulty'} onChange={getDifficulty} />
      <Button title={'Get Workout'} onClick={getWorkout} />
      <WorkoutDisplay workout={workout} />
    </div>
  )
}

export default App
