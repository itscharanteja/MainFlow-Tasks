import React, { useState } from "react";
import "./Calc.css";

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function Calculator() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperatorClick = (op) => {
    setOperand(parseFloat(input));
    setOperator(op);
    setInput("");
  };

  const handleClearClick = () => {
    setInput("");
    setOperator(null);
    setOperand(null);
  };

  const handleEqualClick = () => {
    if (operator && operand !== null) {
      const currentOperand = parseFloat(input);
      let result;
      switch (operator) {
        case "+":
          result = operand + currentOperand;
          break;
        case "-":
          result = operand - currentOperand;
          break;
        case "*":
          result = operand * currentOperand;
          break;
        case "/":
          result = operand / currentOperand;
          break;
        default:
          break;
      }
      setInput(result.toString());
      setOperator(null);
      setOperand(null);
    }
  };

  return (
    <div className="body">
      <div className="calcLayout">
        <div className="head">
          <h1>Calculator</h1>
          <input type="text" name="number" id="num" value={input} readOnly />
        </div>
        <div className="buttons">
          {[1, 2, 3].map((num) => (
            <Button
              key={num}
              label={num}
              onClick={() => handleNumberClick(num)}
            />
          ))}
          <Button label="+" onClick={() => handleOperatorClick("+")} />
          {[4, 5, 6].map((num) => (
            <Button
              key={num}
              label={num}
              onClick={() => handleNumberClick(num)}
            />
          ))}
          <Button label="-" onClick={() => handleOperatorClick("-")} />
          {[7, 8, 9].map((num) => (
            <Button
              key={num}
              label={num}
              onClick={() => handleNumberClick(num)}
            />
          ))}
          <Button label="*" onClick={() => handleOperatorClick("*")} />
          <Button label="clear" onClick={handleClearClick} />
          <Button label="0" onClick={() => handleNumberClick("0")} />
          <Button label="=" onClick={handleEqualClick} />
          <Button label="/" onClick={() => handleOperatorClick("/")} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
