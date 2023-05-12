import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  .timeline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px; // Same as margin-left for the DatePicker
  }

  .calendar {
    flex-grow: 1;
  }

  .calendar .row {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: 60px;
  }

  .calendar .row + .row {
    border-top: 1px solid #cecece;
  }

  .calendar .cell {
    height: 60px;
    /* border: 1px solid black; */
  }

  .calendar .cell + .cell {
    border-left: 1px solid #cecece;
  }

  .calendar .cell.filled {
    background-color: rgb(235, 236, 255);
  }

  .calendar .cell.selected {
    background-color: rgb(179, 183, 255);
  }
`;

export default Wrapper;
