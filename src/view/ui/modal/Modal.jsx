import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledModal from './StyledModal';

export default ({ children, onClose }) =>
  (
    <StyledModal>
      <div className="modal">
        <FontAwesomeIcon icon="times" className="close" onClick={onClose} />
        {children}
      </div>
    </StyledModal>
  );
