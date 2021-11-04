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
      <Form title={'Choose difficulty and complete 3 times or change each time for variation. Rest 1 min between circuits'} onChange={getDifficulty} />
      <Button onClick={getWorkout} title={'Get Workout'} />
      <WorkoutDisplay workout={workout} />
    </div>
  )
}

export default App
