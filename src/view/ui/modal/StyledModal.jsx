import Styled from 'styled-components';

export default Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);

  .modal {
    padding: 15px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 500px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;
