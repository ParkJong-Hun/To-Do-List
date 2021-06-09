//리액트, 리액트돔(렌더링을 위해), css(꾸미기), App(루트 컴포넌트), 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';

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
