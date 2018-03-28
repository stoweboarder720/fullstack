import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/coursey';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Coursey />, div);
  ReactDOM.unmountComponentAtNode(div);
});
