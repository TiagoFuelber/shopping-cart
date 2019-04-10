import Styled from 'styled-components';

export default Styled.div`
  background: white;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 2px 5px -3px rgba(0,0,0,0.5);
  white-space: nowrap;

  ul {
    padding: 0;
    margin: 10px 0 0;

    li {
      list-style: none;
      font-size: 12px;
      text-align: left;
      margin: 0;
      padding: 5px 0;

      &:nth-child(even) {
        background: lightgrey;
      }
    }
  }
`;
