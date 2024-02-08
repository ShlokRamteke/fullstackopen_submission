import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.countAll === 0) {
    return <h1>No feedback given</h1>;
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text="good" value={props.good} />
            <StatisticsLine text="neutral" value={props.neutral} />
            <StatisticsLine text="bad" value={props.bad} />
            <StatisticsLine text="all" value={props.countAll} />
            <StatisticsLine
              text="average"
              value={(props.good - props.bad) / props.countAll}
            />
            <StatisticsLine
              text="positive"
              value={(props.good / props.countAll) * 100 + " %"}
            />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setToGood = (good) => setGood(good);
  const setToNeutral = (neutral) => setNeutral(neutral);
  const setToBad = (bad) => setBad(bad);

  return (
    <div>
      <h1> Give Feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} name="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} name="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} name="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        countAll={good + neutral + bad}
      />
    </div>
  );
};

export default App;
