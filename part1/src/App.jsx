import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={() => handleClick((prevState) => prevState + 1)}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <>
    <h1>Give Feedback</h1>
    <div>
      <Button handleClick={setGood} text="good"/>
      <Button handleClick={setNeutral} text="neutral"/>
      <Button handleClick={setBad} text="bad"/>
    </div>
    <h2>Stats</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    </>
  )
}

export default App