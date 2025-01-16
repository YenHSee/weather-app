import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
    }
  }, [isDarkMode]);

  const changeDarkMode = () => setIsDarkMode((prev) => !prev);

  return [isDarkMode, changeDarkMode];
};

export default useDarkMode;
