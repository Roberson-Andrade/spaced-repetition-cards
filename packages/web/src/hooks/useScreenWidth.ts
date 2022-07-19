import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function handleWindowResize() {
    setWindowSize(window.innerWidth);
  }
  const debouncedFunc = useDebounce(handleWindowResize, 200);

  useEffect(() => {
    window.addEventListener("resize", debouncedFunc);

    return () => {
      window.removeEventListener("resize", debouncedFunc);
    };
  }, []);

  return windowSize;
};
