import styled from 'styled-components';

const Wrapper = styled.div``;

export const DayWeekday = styled.span`
  display: block;
  text-align: center;

  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const DayDate = styled.span`
  display: block;
  width: 58px;
  height: 58px;
  line-height: 58px;
  border-radius: 50%;
  text-align: center;
  margin-top: 8px;
  font-size: 32px;
  font-weight: 500;

  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bgColor};

  @media (max-width: 767px) {
    width: 26px;
    height: 26px;
    line-height: 26px;
    font-size: 16px;
  }
`;

DayDate.defaultProps = {
  theme: {
    color: 'black',
    bgColor: 'transparent',
  },
};

export const currentDayTheme = {
  color: 'white',
  bgColor: 'red',
};

export default Wrapper;
