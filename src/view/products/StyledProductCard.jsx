import Styled from 'styled-components';
import Button from '../ui/buttons/Button';
import { LightRed } from '../ui/styles/constants';

export default Styled.div`
  padding: 10px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Button} {
    margin-top: 15px;
  }

  .price {
    color: ${LightRed};
    font-weight: bold;
    margin-top: 15px;
  }

  img {
    width: 100%;
  }
`;
