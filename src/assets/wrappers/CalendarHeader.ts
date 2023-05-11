import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  padding: 45px 50px;
  justify-content: center;
  align-items: center;

  h1 {
    flex-grow: 1;
    letter-spacing: -2px;
    word-spacing: 5px;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 30px;
    color: red;
  }
`;

export default Wrapper;
