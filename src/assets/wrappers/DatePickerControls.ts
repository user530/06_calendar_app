import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 35px;
  font-size: 30px;
  font-weight: 500;

  @media (max-width: 767px) {
    padding: 10px 15px;
    font-size: 16px;
  }
`;

export const CurrentMonth = styled.span``;

export const PrevDayBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: red;
  transition: 0.3s;

  :hover {
    color: purple;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NextDayBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: red;
  transition: 0.3s;

  :hover {
    color: purple;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export default Wrapper;
