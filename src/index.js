import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <div>
      <div>Calculator</div>
    <Calculator />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
