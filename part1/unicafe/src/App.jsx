import { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => {
    setGood((prev) => prev + 1)
  }
  const handleNeutralFeedback = () => {
    setNeutral((prev) => prev + 1)
  }
  const handleBadFeedback = () => {
    setBad((prev) => prev + 1)
  }


  return (
    <>
      <Title text={"give feedback"} />
      <Button text={"good"} handleClick={handleGoodFeedback}/>
      <Button text={"neutral"} handleClick={handleNeutralFeedback}/>
      <Button text={"bad"} handleClick={handleBadFeedback}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App