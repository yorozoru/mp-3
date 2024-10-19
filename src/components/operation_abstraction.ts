import { useState } from 'react';

export default function useOperate(operation) {
  const [result, setResult] = useState(null);

  const calculate = (array) => {
    const res = operation(array[0], array[1]);
    setResult(res);
  };

  return [result, calculate];
}
