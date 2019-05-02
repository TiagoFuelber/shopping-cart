import Styled from 'styled-components';
import { Button } from '..';

export default Styled.div`

  .buttons {
    display: flex;
    justify-content: center;

    ${Button} {
      padding-right: 25px;
      padding-left: 25px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
`;
