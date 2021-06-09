//리액트, 리액트돔(렌더링을 위해), css(꾸미기), App(루트 컴포넌트), 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';

//컴포넌트 들을 렌더링(실제 화면에 쏨)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //index.html의 root
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
