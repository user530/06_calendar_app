import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: fit-content;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 22px;
  letter-spacing: -2px;
  color: #b8b8b8;

  & > :last-child {
    height: fit-content;
  }

  @media (max-width: 767px) {
    width: 40px;
    font-size: 14px;
  }
`;

export default Wrapper;
