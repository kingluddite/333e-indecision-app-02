import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={200}
    className="custom-modal"
  >
    <h3 className="custom-modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="custom-modal__content">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
