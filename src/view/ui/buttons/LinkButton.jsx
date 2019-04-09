import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import getBaseButtonStyle from './getbaseButtonStyle';

const LinkButton = Styled(Link)`
  ${getBaseButtonStyle()}

  display: block;
  text-decoration: none;
  text-align: center;
`;

export default LinkButton;
