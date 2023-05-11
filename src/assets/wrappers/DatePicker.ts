import styled from 'styled-components';

const Wrapper = styled.header`
  padding-top: 20px;
  padding-left: 100px;
  margin-bottom: 10px;
  background-color: lightgray;

  .date-picker-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
  }

  .date-picker-controls {
    display: flex;
    justify-content: space-around;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export default Wrapper;
