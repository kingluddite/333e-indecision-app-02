let isVisible = false;
const toggleMessage = () => {
  isVisible = !isVisible;
  render();
};
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      {isVisible && <p>Hey! These are some details you can now see!</p>}
      <button onClick={toggleMessage}>
        {!isVisible ? 'Show details' : 'Hide details'}
      </button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('root');
render();
