import Styled from 'styled-components';
import getBaseButtonStyle from './getbaseButtonStyle';

const Button = Styled.button`
  ${getBaseButtonStyle(({ width }) =>
    width)}

  ${({ secondary }) =>
    secondary
    && `
    color: black;
    border: 1px solid black;
    background: white;
  `}

  ${({ small }) =>
    small && 'font-size: 14px; padding: 10px;'}

  :hover {
    cursor: pointer;
    transform: scale(0.98);
  }
`;

export default Button;
