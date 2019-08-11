'use strict';

var app = {
  name: 'John',
  location: 'LA'
};

function getLocation(location) {
  if (location) {
    return app.location;
  }
  return 'Unknown';
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'My Name: ',
    app.name
  ),
  React.createElement(
    'h2',
    null,
    app.title ? app.title : 'No title'
  ),
  React.createElement(
    'p',
    null,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia culpa dolore eius dolor fugiat. Molestias, saepe quia. Sunt voluptate veritatis labore qui dicta doloremque reiciendis asperiores, obcaecati fugit blanditiis.'
  ),
  React.createElement(
    'p',
    null,
    getLocation(app.location)
  )
);

ReactDOM.render(templateTwo, document.getElementById('root'));
