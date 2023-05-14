import styled from 'styled-components';

const Wrapper = styled.button`
  font-size: 34px;
  color: red;
  font-weight: 500;
  transition: 0.3s;
  display: inline-block;
  padding: 10px 30px;
  border: 2px solid transparent;

  :hover {
    border: 2px solid red;
  }

  @media (max-width: 767px) {
    font-size: 20px;
    padding: 5px 15px;
  }
`;

export default Wrapper;
