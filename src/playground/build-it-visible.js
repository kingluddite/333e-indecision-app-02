class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => ({
      visibility: !prevState.visibility,
    }));
  }

  render() {
    return (
      <div>
        {this.state.visibility && <p>This is the content we want to show</p>}
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('root'));
// let isVisible = false;
// const toggleMessage = () => {
//   isVisible = !isVisible;
//   render();
// };
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       {isVisible && <p>Hey! These are some details you can now see!</p>}
//       <button onClick={toggleMessage}>
//         {!isVisible ? 'Show details' : 'Hide details'}
//       </button>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('root');
// render();
