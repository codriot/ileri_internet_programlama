import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Kara from './Kara';
import Dugme from './Dugme';
import Yonlendirme from './Yonlendirme';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
root.render(
  <>
    <h1>Merhaba Farklı React JSX</h1>
    <Yonlendirme />
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
