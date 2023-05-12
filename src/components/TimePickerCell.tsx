import Wrapper from '../assets/wrappers/TimePickerCell';
import { Interview } from '../types';

interface ITimePickerCell {
  cellDate: Date;
  cellTimestamp: number;
  interview: Interview | undefined;
}

const TimePickerCell = (props: ITimePickerCell) => {
  const { cellDate, cellTimestamp, interview } = props;

  const cellDateTime = new Date(cellDate);
  cellDateTime.setHours(cellTimestamp, 0, 0, 0);

  return (
    <Wrapper
      className={`cell ${interview ? 'filled' : ''}`}
      onClick={() => console.log(cellDateTime)}
    >
      <span>
        {interview ? `${interview.position} - ${interview.interviewee}` : null}
      </span>
    </Wrapper>
  );
};

export default TimePickerCell;
