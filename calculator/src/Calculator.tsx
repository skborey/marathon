import { useState } from "react";

type Method = null | "+" | "-" | "*" | "/";
export const Calculator = () => {

  const [result, setResult] = useState(0),
    [method, setMethod] = useState<Method>(null),
    [a, setA] = useState(0),
    [b, setB] = useState<number | null>(null)


  const handleClick = (e: any) => {
    const input = e.target.innerText

    if (input === "DEL") {
      setResult(0)
      setMethod(null)

      return;
    }

    if (input === "=") {
      switch(method) {
        case '+': setResult(a + (b||0)); break;
        case '-': setResult(a - (b || 0)); break;
        case '*': setResult(a * (b || 0)); break;
        case '/': setResult(a / (b || 0)); break;
      }
    }

    if (Number.parseInt(input)) {

      if (method === null) {
      
        const newA = a * 10 + parseInt(input);
        setA(newA); 
        setResult(newA)
      }
    } else {
      setMethod(input)
    }
    
  }
  
  return <>
    Calculator
    <p>
    Result: {result}
    </p>
    <hr/>
    <div>
      <button onClick={handleClick}>C</button>
      <button onClick={handleClick}>DEL</button>
      <button onClick={handleClick}>%</button>
    </div>
    <div>
      <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
      <button onClick={handleClick}>*</button>
    </div>
    <div>
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
      <button onClick={handleClick}>-</button>
    </div>
    <div>
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
      <button onClick={handleClick}>+</button>
    </div>
    <div>
      <button onClick={handleClick}>0</button>
      <button onClick={handleClick}>=</button>
    </div>
  </>
}