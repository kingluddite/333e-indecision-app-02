const app = {
  title: 'My First React App',
  subtitle: 'Learning About Expressions',
  options: ['One', 'Two'],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
const appRoot = document.getElementById('root');
ReactDOM.render(template, appRoot);

// const user = {
//   name: 'Don',
//   age: 22,
//   location: 'Las Vegas',
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

// const appRoot = document.getElementById('root');

// ReactDOM.render(templateTwo, appRoot);
