import { useState } from 'react'

const StatisticLine = (props) => {
  /* if(props.text == "positive") {
    return (
      <div>
        {props.text} {props.value} %
      </div>
    )
  } else {
    return (
      <div>
        {props.text} {props.value}
      </div>
    )
  } */
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}

const Statistics = (props) => {
  if(props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={props.all} />
            <StatisticLine text="average" value={props.average} />
            <StatisticLine text="positive" value={props.positive} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} all={total} average={average} positive={positive} />
    </div>
  )
}

export default App
