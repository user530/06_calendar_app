import Wrapper from '../assets/wrappers/TimePicker';
import TimeStamp from './TimeStamp';

interface ITimePicker {
  startingHour: number;
  workingHours: number;
}

const TimePicker = (props: ITimePicker) => {
  const { startingHour, workingHours } = props;

  const timeline: string[] = new Array(workingHours + 1)
    .fill(startingHour)
    .map((val, ind) => `${val + ind}:00`);

  return (
    <Wrapper>
      <div className="timeline">
        {timeline.map((timestamp, ind) => (
          <TimeStamp key={ind} stamp={timestamp} />
        ))}
      </div>

      <div className="calendar">
        {Array(workingHours)
          .fill('')
          .map((row, ind) => (
            <div className="row" key={ind}>
              <div className="cell">
                <span>1</span>
              </div>
              <div className="cell">
                <span>1</span>
              </div>
              <div className="cell">
                <span>1</span>
              </div>
              <div className="cell">
                <span>1</span>
              </div>
              <div className="cell">
                <span>1</span>
              </div>
              <div className="cell">
                <span>1</span>
              </div>
              <div className="cell">
                <span>1</span>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default TimePicker;
