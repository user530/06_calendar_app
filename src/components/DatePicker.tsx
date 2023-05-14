import React from 'react';
import Wrapper from '../assets/wrappers/DatePicker';
import { DatePickerDays, DatePickerControls } from '../components';
import { getDateRange } from '../utils';
import { useAppContext } from '../context';

const DatePicker = () => {
  const { setDateRange } = useAppContext();

  React.useEffect(() => {
    setDateRange(getDateRange(new Date()));
  }, []);

  return (
    <Wrapper>
      <DatePickerDays />
      <DatePickerControls />
    </Wrapper>
  );
};

export default DatePicker;
