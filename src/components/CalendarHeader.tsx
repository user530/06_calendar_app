import Wrapper, {
  HeaderHeading,
  HeaderButton,
} from '../assets/wrappers/CalendarHeader';
import { GoPlus } from 'react-icons/go';
import { sameDateHour, validateEventInput } from '../utils';
import { useAppContext } from '../context';
import { addInterview } from '../utils/apiHandlers';

const CalendarHeader = () => {
  const {
    interviews,
    setInterviews,
    selectedDate,
    selectedInterview,
    setSelectedInterview,
  } = useAppContext();

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
        if (
          !selectedInterview &&
          selectedDate &&
          sameDateHour(newInterview.date, selectedDate)
        ) {
          setSelectedInterview(newInterview);
        }
        setInterviews([...interviews, newInterview]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <HeaderHeading>Interview Calendar</HeaderHeading>

      <HeaderButton onClick={addInterviewClick}>
        <GoPlus />
      </HeaderButton>
    </Wrapper>
  );
};

export default CalendarHeader;
