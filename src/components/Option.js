import React from 'react';

export default props => (
  <div className="option">
    <p className="option__content">
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

// export default Option;
