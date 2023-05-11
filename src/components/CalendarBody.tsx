import React from 'react';
import Wrapper from '../assets/wrappers/CalendarBody';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

const CalendarBody = () => {
  return (
    <Wrapper>
      <DatePicker />
      <TimePicker startingHour={8} workingHours={12} />
    </Wrapper>
  );
};

export default CalendarBody;
