import { useEffect, useState } from "react";

const useCounter = (initialValue = 0) => {
  const [number, setNumber] = useState(initialValue);

  const increment = () => {
    if (number < 11) {
      setNumber(number + 1);
    }
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const resetNumber = () => {
    setNumber(0);
  };

  useEffect(() => {}, [number]);

  return {
    number,
    setNumber,
    increment,
    decrement,
    resetNumber,
  };
};

export default useCounter;
