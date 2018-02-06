import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <button onClick={props.handleClick}>cerrar</button>
    </div>
  );
}

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Modal;
