import React from 'react';
import Wrapper from '../assets/wrappers/DatePicker';
import Day from './DatePickerDay';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { getDateRange, offsetDate, getRangeMonth } from '../utils/dateUtils';

const DatePicker = () => {
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [dateRange, setDateRange] = React.useState<Date[]>([]);

  const nextDay = () => {
    setStartDate((current) => offsetDate(current));
  };

  const prevDay = () => {
    setStartDate((current) => offsetDate(current, -1));
  };

  React.useEffect(() => {
    setDateRange(getDateRange(startDate));
  }, [startDate]);

  return (
    <Wrapper>
      <header>
        <div className="date-picker-days">
          {dateRange.map((date: Date, ind: number) => (
            <Day key={ind} date={date} />
          ))}
        </div>

        <div className="date-picker-controls">
          <button className="prevDay" onClick={() => prevDay()}>
            <GrPrevious />
          </button>

          <span className="currentMonth">{getRangeMonth(dateRange)}</span>

          <button className="nextDay" onClick={() => nextDay()}>
            <GrNext />
          </button>
        </div>
      </header>
    </Wrapper>
  );
};

export default DatePicker;
