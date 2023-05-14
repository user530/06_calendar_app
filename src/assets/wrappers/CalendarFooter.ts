import styled from 'styled-components';

const Wrapper = styled.footer`
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px;
  background-color: #f6f6f6;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;

  @media (max-width: 767px) {
    height: 60px;
    padding: 10px 40px;
  }
`;

export default Wrapper;
