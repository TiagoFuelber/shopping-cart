import Styled from 'styled-components';
import { Blue } from './styles/constants';

export default Styled.div`
  .pagination {
    display: flex;
    justify-content: center;

    li {
      padding: 5px 15px;
      list-style: none;
      background: lightgrey;
      margin: 0 2px;

      &.active {
        background: ${Blue};

        a {
          color: white;
        }
      }

      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;
