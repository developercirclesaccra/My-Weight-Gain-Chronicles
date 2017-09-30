import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Foods from './components/Foods';
import App from './App'
import Jumbotron from './components/Jumbotron'

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
