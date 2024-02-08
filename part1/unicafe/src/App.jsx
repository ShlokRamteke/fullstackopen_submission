import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const Statistics = (props) => {
  if (props.countAll === 0) {
    return <h1>No feedback given</h1>;
  } else {
    return (
      <div>
        <h2> Stats</h2>
        <p> Good: {props.good}</p>
        <p> Neutral: {props.neutral}</p>
        <p> Bad: {props.bad}</p>
        <p>All: {props.countAll}</p>
        <p> Positive: {(props.good / props.countAll) * 100}</p>
        <p> Average: {(props.good - props.bad) / props.countAll}</p>
        <p></p>
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
