import Wrapper, {
  InnerCell,
  filledTheme,
  selectedTheme,
} from '../assets/wrappers/TimePickerCell';
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
      onClick={() => {
        setSelectedDate(cellDateTime);
        interview
          ? setSelectedInterview(interview)
          : setSelectedInterview(null);
      }}
    >
      <InnerCell
        theme={
          selectedDate && sameDateHour(selectedDate, cellDateTime)
            ? selectedTheme
            : interview
            ? filledTheme
            : null
        }
      >
        {interview ? '' : null}
      </InnerCell>
    </Wrapper>
  );
};

export default TimePickerCell;
