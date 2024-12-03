import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router'; // HashRouter를 사용한 라우터 정의
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
