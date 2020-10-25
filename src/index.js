import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div className="background-image"></div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

