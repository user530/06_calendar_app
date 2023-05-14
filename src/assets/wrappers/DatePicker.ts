import styled from 'styled-components';

const Wrapper = styled.header`
  height: 168px;
  padding-top: 16px;
  padding-left: 90px;
  background-color: #f6f6f6;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  font-size: 26px;
  font-weight: 700;

  @media (max-width: 767px) {
    height: 100px;
    padding-left: 40px;
    padding-top: 10px;
  }
`;

export default Wrapper;
