import Wrapper from '../assets/wrappers/CalendarHeader';
import { GoPlus } from 'react-icons/go';

const CalendarHeader = () => {
  return (
    <Wrapper>
      <h1>Interview Calendar</h1>

      <button>
        <GoPlus />
      </button>
    </Wrapper>
  );
};

export default CalendarHeader;
