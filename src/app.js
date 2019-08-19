// const obj = {
//   name: 'John',
//   getName() {
//     return this.name;
//   },
// };
// const getName = obj.getName.bind({ name: 'Jane' });

// const func = function() {
//   console.log(this);
// };
// func();
// console.log(getName());
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Let your computer tell you what to do';
    const options = ['Item One', 'Item Two', 'Item Four'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p key={this.props.option}>
          <strong>Option</strong>: {this.props.option}
        </p>
      </div>
    );
  }
}
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <p>Options Text</p>
        {this.props.options.map(option => (
          <Option key={option} option={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleFormSubmit(e) {
    e.preventDefault();
    const optionSelected = e.target.elements.option.value.trim();
    if (optionSelected) {
      alert(`The selected Option is ${optionSelected}`);
    }
    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
