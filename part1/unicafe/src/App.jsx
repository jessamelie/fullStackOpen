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

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 + " %"

  return (
    <>
      <Title text={"give feedback"} />
      <Button text={"good"} handleClick={handleGoodFeedback}/>
      <Button text={"neutral"} handleClick={handleNeutralFeedback}/>
      <Button text={"bad"} handleClick={handleBadFeedback}/>
      <Title text={"statistics"} />
      <Statistics text={"good"} count={good}/>
      <Statistics text={"neutral"} count={neutral}/>
      <Statistics text={"bad"} count={bad}/>
      <Statistics text={"all"} count={all}/>
      <Statistics text={"average"} count={average}/>
      <Statistics text={"positive"} count={positive}/>

    </>
  )
}

export default App