import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//app.js is where you modify everything
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//This is from app.js and gets rendered to the index.html in the public folder
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
