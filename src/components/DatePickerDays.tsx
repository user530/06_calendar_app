import Wrapper from '../assets/wrappers/DatePickerDays';
import { DatePickerDay } from '../components';
import { useAppContext } from '../context';

const DatePickerDays = () => {
  const { dateRange } = useAppContext();

  return (
    <Wrapper>
      {dateRange.map((date: Date, ind: number) => (
        <DatePickerDay key={ind} date={date} />
      ))}
    </Wrapper>
  );
};

export default DatePickerDays;
