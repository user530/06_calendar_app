import styled from 'styled-components';

const Wrapper = styled.div`
  span {
    display: block;
  }

  .weekday,
  .date {
    width: 20px;
    height: 20px;
    text-align: center;
  }

  .date.today {
    border-radius: 50%;
    background-color: red;
  }
`;

export default Wrapper;
