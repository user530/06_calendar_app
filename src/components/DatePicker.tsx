import React from 'react';
import Wrapper from '../assets/wrappers/DatePicker';
import Day from './DatePickerDay';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { getDateRange, offsetDate, getRangeMonth } from '../utils/dateUtils';
import { useAppContext } from '../context';

const DatePicker = () => {
  const { dateRange, setDateRange } = useAppContext();

  const nextDay = () => {
    const newRange = dateRange.map((date) => offsetDate(date));
    setDateRange(newRange);
  };

  const prevDay = () => {
    const newRange = dateRange.map((date) => offsetDate(date, -1));
    setDateRange(newRange);
  };

  React.useEffect(() => {
    setDateRange(getDateRange(new Date()));
  }, []);

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
