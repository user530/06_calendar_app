import Wrapper from '../assets/wrappers/TimePickerRow';
import { useAppContext } from '../context';
import { Interview } from '../types';
import TimePickerCell from './TimePickerCell';

interface ITimePickerRow {
  rowTimestamp: number;
  rowInterviews: Interview[];
}

const TimePickerRow = (props: ITimePickerRow) => {
  const { dateRange } = useAppContext();
  const { rowTimestamp, rowInterviews } = props;

  return (
    <Wrapper className="row">
      {dateRange.map((day, ind) => (
        <TimePickerCell
          key={ind}
          cellTimestamp={rowTimestamp}
          cellDate={day}
          interview={rowInterviews.find(
            (interview) => interview.date.getDate() === day.getDate()
          )}
        />
      ))}
    </Wrapper>
  );
};

export default TimePickerRow;
