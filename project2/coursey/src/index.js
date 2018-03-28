import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Coursey from './scripts/coursey';
import registerServiceWorker from './registerServiceWorker';

import "./style/navigation.css";
import "./style/courseSearch.css";
import "./style/courseDisplay.css";
import "./style/card.css";
import "./style/coursey.css";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(<Coursey />, document.getElementById('root'));
registerServiceWorker();
