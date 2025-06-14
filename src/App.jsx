import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./Components/Display.jsx";
import ButtonsContainer from "./Components/ButtonsContainer.jsx";

function App() {
  const [input, setInput] = useState("");

  function handleButtonClick(value) {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  }

  // ✅ Add keyboard listener
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;

      if (!isNaN(key) || key === ".") {
        handleButtonClick(key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        handleButtonClick(key);
      } else if (key === "Enter" || key === "=") {
        handleButtonClick("=");
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        handleButtonClick("C");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [input]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.calculator}>
        <Display value={input} />
        <ButtonsContainer onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
