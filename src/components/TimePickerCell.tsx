import Wrapper from '../assets/wrappers/TimePickerCell';
import { useAppContext } from '../context';
import { Interview } from '../types';
import { sameDateHour } from '../utils';

interface ITimePickerCell {
  cellDate: Date;
  cellTimestamp: number;
  interview: Interview | undefined;
}

const TimePickerCell = (props: ITimePickerCell) => {
  const { cellDate, cellTimestamp, interview } = props;
  const { selectedDate, setSelectedDate, setSelectedInterview } =
    useAppContext();

  const cellDateTime = new Date(cellDate);
  cellDateTime.setHours(cellTimestamp, 0, 0, 0);

  return (
    <Wrapper
      className={`cell ${interview ? 'filled' : ''} ${
        selectedDate && sameDateHour(selectedDate, cellDateTime)
          ? 'selected'
          : ''
      }`}
      onClick={() => {
        setSelectedDate(cellDateTime);
        interview
          ? setSelectedInterview(interview)
          : setSelectedInterview(null);
      }}
    >
      <span>
        {interview ? `${interview.position} - ${interview.interviewee}` : null}
      </span>
    </Wrapper>
  );
};

export default TimePickerCell;
