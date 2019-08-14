const app = {
  title: 'My First React App',
  subtitle: 'Learning About Expressions',
  options: [],
};
const onFormSubmit = e => {
  e.preventDefault();
  const optionEl = e.target.elements.option;
  const option = optionEl.value;

  if (option) {
    app.options.push(option);
    optionEl.value = '';
    rerenderPageEls();
  }
};

const removeAllItems = () => {
  if (app.options.length > 0) {
    app.options = [];
    rerenderPageEls();
  }
};

const rerenderPageEls = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? (
        <p>Here are your options</p>
      ) : (
        <p>No options</p>
      )}
      <p>Number of Options: {app.options.length}</p>
      <button onClick={removeAllItems}>Remove All</button>
      <ol>{app.options.map(option => <li key={option}>option</li>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <ol>
        {app.options.map(option => <li key={option}>option</li>)
        }
      </ol>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('root');

rerenderPageEls();
