const Total = ({ parts }) => {
  const getSum = () => {
    let sum = parts.reduce((p, c) => p + c.exercises, 0);
    return sum;
  };

  return (
    <>
      <p>
        <b>Number of exercises:{getSum()}</b>
      </p>
    </>
  );
};

export default Total;
