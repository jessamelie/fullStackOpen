import { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedbacks = () => {
    setGood((prev) => prev + 1)
  }
  const handleNeutralFeedbacks = () => {
    setNeutral((prev) => prev + 1)
  }
  const handleBadFeedbacks = () => {
    setBad((prev) => prev + 1)
  }

  const allFeedbacks = good + neutral + bad


  return (
    <>
      <Title text={"give feedback"} />
      <Button text={"good"} handleClick={handleGoodFeedbacks}/>
      <Button text={"neutral"} handleClick={handleNeutralFeedbacks}/>
      <Button text={"bad"} handleClick={handleBadFeedbacks}/>
      <Title text={"statistics"} />
      {allFeedbacks > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ):(<p>No feedback given</p>)
      }
    </>
  )
}

export default App