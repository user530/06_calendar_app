import Wrapper from '../assets/wrappers/CalendarHeader';
import { GoPlus } from 'react-icons/go';
import { validateEventInput } from '../utils';
import { useAppContext } from '../context';
import { addInterview } from '../utils/apiHandlers';

const CalendarHeader = () => {
  const { interviews, setInterviews } = useAppContext();

  const addInterviewClick = () => {
    const input = prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss');

    if (!input) return;

    if (!validateEventInput(input)) {
      alert('Invalid input format! Please, try again.');
      return;
    }

    const eventDate: Date = new Date(Date.parse(input));

    addInterview(eventDate)
      .then((newInterview) => {
        setInterviews([...interviews, newInterview]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <h1>Interview Calendar</h1>

      <button onClick={addInterviewClick}>
        <GoPlus />
      </button>
    </Wrapper>
  );
};

export default CalendarHeader;
