import { createGlobalStyle } from 'styled-components';
import { LightRed } from './constants';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  .center {
    text-align: center;
  }

  .upper {
    text-transform: uppercase;
  }

  .bold {
    font-weight: 800;
  }

  .red {
    color: ${LightRed};
  }
`;

export default GlobalStyle;
