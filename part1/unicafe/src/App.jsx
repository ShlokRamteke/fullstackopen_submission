import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setToGood = (good) => setGood(good);
  const setToNeutral = (neutral) => setNeutral(neutral);
  const setToBad = (bad) => setBad(bad);

  let countAll = good + neutral + bad;

  return (
    <div>
      <h1> Give Feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} name="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} name="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} name="bad" />
      <h2> Stats</h2>
      <p> Good: {good}</p>
      <p> Neutral: {neutral}</p>
      <p> Bad: {bad}</p>
      <p>All: {countAll}</p>
      <p> Positive: {(good / countAll) * 100}</p>
      <p> Average: {(good - bad) / countAll}</p>
      <p></p>
    </div>
  );
};

export default App;
