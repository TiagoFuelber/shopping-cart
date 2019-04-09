import Styled from 'styled-components';
import { LightRed } from '../ui/styles/constants';

export default Styled.div`
  font-weight: bold;
  background: lightgrey;
  padding: 15px;
  text-align: center;

  .price {
    font-weight: bold;
    color: white;
    background: ${LightRed};
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 15px;
  }
`;
