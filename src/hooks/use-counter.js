import { useState, useEffect } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  // return the count and incrementCount function as on object
  return { count, incrementCount };
};

export default useCounter;
