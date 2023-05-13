import Wrapper from '../assets/wrappers/TimePicker';
import { useAppContext } from '../context';
import { TimePickerRow, TimeStamp } from '../components';
import React from 'react';

interface ITimePicker {
  startingHour: number;
  workingHours: number;
}

const TimePicker = (props: ITimePicker) => {
  const { startingHour, workingHours } = props;
  const { interviews } = useAppContext();

  console.log(interviews);

  const timeline: number[] = new Array(workingHours + 1)
    .fill(startingHour)
    .map((val, ind) => val + ind);

  return (
    <Wrapper>
      <div className="timeline">
        {timeline.map((timestamp, ind) => (
          <TimeStamp key={ind} stamp={timestamp} />
        ))}
      </div>

      <div className="calendar">
        {timeline.slice(0, -1).map((workHour, ind) => (
          <TimePickerRow
            key={ind}
            rowTimestamp={workHour}
            rowInterviews={interviews.filter(
              (interview) => interview.date.getHours() === workHour
            )}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default TimePicker;
