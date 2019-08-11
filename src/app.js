const app = {
  name: 'John',
  location: 'LA',
};

function getLocation(location) {
  if (location) {
    return app.location;
  }
  return 'Unknown';
}

const templateTwo = (
  <div>
    <h1>My Name: {app.name}</h1>
    <h2>{app.title ? app.title : 'No title'}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia
      culpa dolore eius dolor fugiat. Molestias, saepe quia. Sunt voluptate
      veritatis labore qui dicta doloremque reiciendis asperiores, obcaecati
      fugit blanditiis.
    </p>
    <p>{getLocation(app.location)}</p>
  </div>
);

ReactDOM.render(templateTwo, document.getElementById('root'));
