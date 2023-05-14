import styled from 'styled-components';

const Wrapper = styled.div`
  height: 72.5px;
  border-top: 1px solid transparent;

  @media (max-width: 767px) {
    height: 45px;
  }
`;

export const InnerStamp = styled.span`
  display: block;
  margin-top: -12px;

  @media (max-width: 767px) {
    margin-top: -8px;
  }
`;

export default Wrapper;
