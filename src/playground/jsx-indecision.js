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

// const onMakeDecision = () => {
//   const optionsLen = app.options.length;
//   const randomNum = Math.floor(Math.random() * optionsLen);
//   console.log(randomNum);
// };

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
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
      <button onClick={removeAllItems}>Remove All</button>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('root');

rerenderPageEls();
