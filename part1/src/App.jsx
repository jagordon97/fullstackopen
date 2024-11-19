import { useState } from 'react'

const Button = ({handleClick, text}) => {
  
  return (
    <button onClick={() => handleClick((prevState) => prevState + 1)}>{text}</button>
  )
}

const Statistics = ({feedback}) => {
  const total = feedback[0] + feedback[1] + feedback[2]
  const average = (feedback[0] - feedback[2]) / total
  const posPercent = (100 * feedback[0]) / total;



  return (
    <>
      <h2>Stats</h2>
      <p>Good: {feedback[0]}</p>
      <p>Neutral: {feedback[1]}</p>
      <p>Bad: {feedback[2]}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Percentage of Positive: {posPercent}</p>
    </>
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
    <Statistics feedback={[good, neutral, bad]}/>

    </>
  )
}

export default App