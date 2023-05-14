import Wrapper, {
  DayDate,
  DayWeekday,
  currentDayTheme,
} from '../assets/wrappers/DatePickerDay';
import { sameDate } from '../utils';

interface IDatePickerDay {
  date: Date;
}

const DatePickerDay = (props: IDatePickerDay) => {
  const { date } = props;
  const weekday = date.toLocaleString('en', { weekday: 'narrow' });
  const day = date.getDate();
  const today = new Date();

  return (
    <Wrapper>
      <DayWeekday>{weekday}</DayWeekday>
      <DayDate theme={sameDate(date, today) ? currentDayTheme : null}>
        {day}
      </DayDate>
    </Wrapper>
  );
};

export default DatePickerDay;
