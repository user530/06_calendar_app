import Wrapper from '../assets/wrappers/DatePickerDay';
import { sameDate } from '../utils';

interface IDatePickerDay {
  date: Date;
}

const DatePickerDay = (props: IDatePickerDay) => {
  const { date } = props;
  const weekday = date.toLocaleString('en', { weekday: 'narrow' });
  const day = date.getDate();

  return (
    <Wrapper>
      <span className="weekday">{weekday}</span>
      <span className={`date ${sameDate(date, new Date()) ? 'today' : ''}`}>
        {day}
      </span>
    </Wrapper>
  );
};

export default DatePickerDay;
