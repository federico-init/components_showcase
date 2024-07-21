import useCounter from "../hooks/use-counter";

import Button from "../components/Button";

const CounterPage = ({ initialCount }) => {
  const { count, incrementCount } = useCounter(initialCount);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={incrementCount}>Increment</Button>
    </div>
  );
};

export default CounterPage;
