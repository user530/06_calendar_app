import Wrapper from '../assets/wrappers/CalendarFooter';
import DeleteInterviewBtn from './DeleteInterviewBtn';
import { useAppContext } from '../context';
import TodayInterviewBtn from './TodayInterviewBtn';

const CalendarFooter = () => {
  const { selectedInterview } = useAppContext();

  return (
    <Wrapper>
      <TodayInterviewBtn />

      {selectedInterview ? (
        <DeleteInterviewBtn interview={selectedInterview} />
      ) : null}
    </Wrapper>
  );
};

export default CalendarFooter;
