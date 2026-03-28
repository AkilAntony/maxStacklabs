 
import { useEffect, useState } from "react";

export const useDebounce = (userInput: string, delay?: number) => {
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(userInput);
    }, delay ?? 300);

    return () => clearTimeout(timer);
  }, [userInput]);

  return debouncedInput;
};
