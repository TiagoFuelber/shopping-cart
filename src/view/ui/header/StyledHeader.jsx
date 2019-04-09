import Styled from 'styled-components';

export default Styled.header`
  position: fixed;
  width: 100%;
  padding: 15px 0;
  background: lightgrey;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  * {
    margin: 0 15px;
  }

  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
