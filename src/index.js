import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/AvenirLTStd-Book.otf'
import './fonts/AvenirLTStd-Heavy.otf'
import './fonts/AvenirLTStd-Medium.otf'
import './fonts/LibreBaskerville-Bold.ttf'
import './fonts/LibreBaskerville-Italic.ttf'
import './fonts/LibreBaskerville-Regular.ttf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
