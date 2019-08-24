class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
    };
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists. Please enter another Item';
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option]),
    }));
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Let your computer tell you what to do';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
}

const Action = (props) => {
  return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
  )
}

const Option = (props) => {
    return (
      <div>
        <p key={props.option}>
          <strong>Option</strong>: {props.option}
        </p>
      </div>
    );
}
const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <p>Options Text</p>
        {props.options.map(option => (
          <Option key={option} option={option} />
        ))}
      </div>
    );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const optionSelected = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(optionSelected);
    this.setState(() => ({
      error,
    }));
    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (prop) => {
//   return (
//     <div>
//       <p>Name: {prop.name}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
