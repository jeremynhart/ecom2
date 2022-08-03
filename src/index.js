import React from 'react';
import ReactDOM from 'react-dom';
import { Metrics } from '@layer0/rum';
import App from './App';

new Metrics({
  token: '17a1a83e-d3bf-4893-9a0c-e78eaa33a1d3',
}).collect();

ReactDOM.render(<App />, document.getElementById('root'));
