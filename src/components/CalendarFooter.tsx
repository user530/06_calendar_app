import Wrapper from '../assets/wrappers/CalendarFooter';
import { useAppContext } from '../context';
import { DeleteInterviewBtn, TodayInterviewBtn } from '../components';

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
