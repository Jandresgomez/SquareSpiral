import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Spiral from './Spiral';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(Spiral(0,3), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
