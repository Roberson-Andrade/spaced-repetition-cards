import { useRef } from "react";

export const useDebounce = (func: () => void, delay: number) => {
  const timeoutRef = useRef<number | null>(null);

  const debouncedFunc = () => {
    clearTimeout(timeoutRef.current as number);
    timeoutRef.current = window.setTimeout(() => {
      func();
    }, delay);
  };

  return debouncedFunc;
};
