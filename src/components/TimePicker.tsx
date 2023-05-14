import Wrapper from '../assets/wrappers/TimePicker';
import { Timeline, CalendarGrid } from '../components';

interface ITimePicker {
  startingHour: number;
  workingHours: number;
}

const TimePicker = (props: ITimePicker) => {
  const { startingHour, workingHours } = props;

  const timeline: number[] = new Array(workingHours + 1)
    .fill(startingHour)
    .map((val, ind) => val + ind);

  return (
    <Wrapper>
      <Timeline timeline={timeline} />

      <CalendarGrid timeline={timeline} />
    </Wrapper>
  );
};

export default TimePicker;
