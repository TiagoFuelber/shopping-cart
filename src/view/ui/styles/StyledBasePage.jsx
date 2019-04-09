import Styled from 'styled-components';

const StyledBasePage = Styled.div`
  ${({ withHeader }) =>
    withHeader && 'margin-top: 50px;'}
`;

export default StyledBasePage;
