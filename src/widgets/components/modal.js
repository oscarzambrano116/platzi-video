import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

function Modal(props) {
  const {
    children,
    handleClick,
  } = props;
  return (
    <div className="Modal">
      {children}
      <button onClick={handleClick}>cerrar</button>
    </div>
  );
}

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Modal;
