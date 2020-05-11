import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ToDoModel from "./ToDoModel";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ToDoModel />, document.getElementById('root'));    //render variable takes an argument, and tells you which file to load

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
