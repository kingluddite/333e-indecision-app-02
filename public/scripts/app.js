'use strict';

console.log('app.js is loading');

// JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'I am JSX. Nice to meet you'
);
var appRoot = document.getElementById('root');
ReactDOM.render(template, appRoot);
