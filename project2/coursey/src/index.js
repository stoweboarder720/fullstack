import React from 'react';
import ReactDOM from 'react-dom';
import Coursey from './scripts/coursey';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import "./style/navigation.css";
import "./style/courseCard.css";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(<Coursey />, document.getElementById('root'));
registerServiceWorker();
