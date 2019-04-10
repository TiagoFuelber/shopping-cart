import Styled from 'styled-components';
import { Blue } from '../ui/styles/constants';

export default Styled.div`
  padding: 5px;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  user-select: none;

  .svg-inline--fa {
    color: ${Blue};

    &:hover {
      cursor: pointer;
    }
  }

  .quantity {
    font-weight: bold;
    padding: 0 15px;
  }

  .description {
    margin-left: 15px;
  }
`;
