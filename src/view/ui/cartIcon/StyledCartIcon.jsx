import Styled from 'styled-components';
import { Blue } from '../styles/constants';
import StyledCartSummary from './StyledCartSummary';

export default Styled.div`
  position: relative;

  .svg-inline--fa {
    color: ${Blue};
  }

  .quantity {
    color: white;
    font-size: 10px;
    font-weight: bold;
    background: red;
    position: absolute;
    top: -5px;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 3px 6px;
  }

  &:hover {
    cursor: pointer;
  }

  ${StyledCartSummary} {
    position: absolute;
    right: 50%;
    display: none;
  }

  &:hover ${StyledCartSummary} {
    display: block;
  }
`;
