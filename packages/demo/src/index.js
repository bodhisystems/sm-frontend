import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// web components polyfill
import "@webcomponents/webcomponentsjs/webcomponents-lite";
// our component(s)
import 'smhello';

import './index.css';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
