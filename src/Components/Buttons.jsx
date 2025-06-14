
import styles from "./Buttons.module.css";

function Buttons({onButtonClick}) {
  let arr = ["C", 1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "0", "=", "/"];
  
  // Function to determine button class based on label
  const getButtonClass = (label) => {
    const labelStr = label.toString();
    
    // Base button class
    let classes = [styles.button];
    
    // Add specific classes based on button type
    if (labelStr === "C") {
      classes.push(styles.buttonClear);
    } else if (labelStr === "=") {
      classes.push(styles.buttonEquals);
    } else if (["+", "-", "*", "/"].includes(labelStr)) {
      classes.push(styles.buttonOperator);
    } else if (labelStr === "0") {
      classes.push(styles.buttonZero);
    }
    // Number buttons (1-9) just use the base button class
    
    return classes.join(" ");
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        {arr.map((label) => (
          <button 
            key={label} 
            className={getButtonClass(label)}
            onClick={() => onButtonClick(label.toString())}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buttons;