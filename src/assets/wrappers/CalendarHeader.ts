import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const HeaderHeading = styled.h1`
  font-size: 39px;
  flex-grow: 1;
  letter-spacing: -2.3px;
  word-spacing: 5px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 45px;
  color: red;
  transition: 0.3s;

  :hover {
    transform: scale(1.15);
  }

  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

export default Wrapper;
