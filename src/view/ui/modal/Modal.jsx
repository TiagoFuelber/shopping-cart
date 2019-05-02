import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledModal from './StyledModal';

const Modal = ({ children, onClose }) =>
  (
    <StyledModal>
      <div className="modal">
        <FontAwesomeIcon icon="times" className="close" onClick={onClose} />
        {children}
      </div>
    </StyledModal>
  );

Modal.defaultProps = {
  children: null,
  onClose: () =>
    null
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClose: PropTypes.func
};

export default Modal;
