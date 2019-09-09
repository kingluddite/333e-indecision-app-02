import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };
  handleAddOption = e => {
    e.preventDefault();
    const optionSelected = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(optionSelected);
    this.setState(() => ({
      error,
    }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option__error">{this.state.error}</p>
        )}
        <form className="add-option__form" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}
