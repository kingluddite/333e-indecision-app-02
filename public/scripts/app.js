'use strict';

var app = {
  title: 'My First React App',
  subtitle: 'Learning About Expressions',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var optionEl = e.target.elements.option;
  var option = optionEl.value;

  if (option) {
    app.options.push(option);
    optionEl.value = '';
    rerenderPageEls();
  }
};

var removeAllItems = function removeAllItems() {
  if (app.options.length > 0) {
    app.options = [];
    rerenderPageEls();
  }
};

var rerenderPageEls = function rerenderPageEls() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
      'p',
      null,
      'Here are your options'
    ) : React.createElement(
      'p',
      null,
      'No options'
    ),
    React.createElement(
      'p',
      null,
      'Number of Options: ',
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAllItems },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          'option'
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          'option'
        );
      })
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('root');

rerenderPageEls();
