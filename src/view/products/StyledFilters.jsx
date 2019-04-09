import Styled from 'styled-components';
import Button from '../ui/buttons/Button';
import { Blue } from '../ui/styles/constants';

export default Styled.div`
  display: flex;

  ${Button} {
    color: black;
    font-size: 14px;
    padding: 5px 10px;
    background: lightgrey;
    margin-left: 2px;

    &.active {
      color: white;
      background: ${Blue};
      font-weight: bold;
    }
  }
`;
