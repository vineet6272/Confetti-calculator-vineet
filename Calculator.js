// Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      evaluate();
    } else if (value === 'C') {
      clear();
    } else {
      setDisplay(display + value);
    }
  };

  const evaluate = () => {
    try {
      // eslint-disable-next-line
      const result = eval(display); // Using eval here for simplicity, consider alternatives for production
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('mc')}>mc</button>
        <button onClick={() => handleClick('m+')}>m+</button>
        <button onClick={() => handleClick('m-')}>m-</button>
        <button onClick={() => handleClick('mr')}>mr</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('+/-')}>+/-</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button className="operator" onClick={() => handleClick('÷')}>÷</button>
        <button onClick={() => handleClick('2^')}>2<sup>nd</sup></button>
        <button onClick={() => handleClick('x^2')}>x<sup>2</sup></button>
        <button onClick={() => handleClick('x^3')}>x<sup>3</sup></button>
        <button onClick={() => handleClick('x^y')}>x<sup>y</sup></button>
        <button onClick={() => handleClick('Math.exp(')}>e<sup>x</sup></button>
        <button onClick={() => handleClick('10^')}>10<sup>x</sup></button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('x')}>×</button>
        <button onClick={() => handleClick('1/x')}>1/x</button>
        <button onClick={() => handleClick('Math.sqrt(')}>2<sup>√x</sup></button>
        <button onClick={() => handleClick('Math.cbrt(')}>3<sup>√x</sup></button>
        <button onClick={() => handleClick('Math.pow(')}>y<sup>√x</sup></button>
        <button onClick={() => handleClick('Math.log(')}>ln</button>
        <button onClick={() => handleClick('Math.log10(')}>log<sub>10</sub></button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('factorial(')}>x!</button>
        <button onClick={() => handleClick('Math.sin(')}>sin</button>
        <button onClick={() => handleClick('Math.cos(')}>cos</button>
        <button onClick={() => handleClick('Math.tan(')}>tan</button>
        <button onClick={() => handleClick('Math.E')}>e</button>
        <button onClick={() => handleClick('1e+1')}>EE</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('Math.PI')}>π</button>
        <button onClick={() => handleClick('Math.random()')}>Rand</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="operator" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
