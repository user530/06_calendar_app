import Wrapper from '../assets/wrappers/CalendarGrid';
import { TimePickerRow } from '../components';
import { useAppContext } from '../context';

interface ICalendarGrid {
  timeline: number[];
}

const CalendarGrid = (props: ICalendarGrid) => {
  const { timeline } = props;
  const { interviews } = useAppContext();

  return (
    <Wrapper>
      {timeline.slice(0, -1).map((workHour, ind) => (
        <TimePickerRow
          key={ind}
          rowTimestamp={workHour}
          rowInterviews={interviews.filter(
            (interview) => interview.date.getHours() === workHour
          )}
        />
      ))}
    </Wrapper>
  );
};

export default CalendarGrid;
