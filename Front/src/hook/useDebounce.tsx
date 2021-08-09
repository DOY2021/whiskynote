import React, {useEffect, useState} from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      }
    }
    , [value]);
  return debouncedValue;
}

export default useDebounce;