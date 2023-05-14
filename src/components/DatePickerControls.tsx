import Wrapper, {
  CurrentMonth,
  NextDayBtn,
  PrevDayBtn,
} from '../assets/wrappers/DatePickerControls';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useAppContext } from '../context';
import { offsetDate, getRangeMonth } from '../utils';

const DatePickerControls = () => {
  const { dateRange, setDateRange } = useAppContext();

  const nextDay = () => {
    const newRange = dateRange.map((date) => offsetDate(date));
    setDateRange(newRange);
  };

  const prevDay = () => {
    const newRange = dateRange.map((date) => offsetDate(date, -1));
    setDateRange(newRange);
  };

  return (
    <Wrapper>
      <PrevDayBtn onClick={() => prevDay()}>
        <FaChevronLeft />
      </PrevDayBtn>

      <CurrentMonth>{getRangeMonth(dateRange)}</CurrentMonth>

      <NextDayBtn onClick={() => nextDay()}>
        <FaChevronRight />
      </NextDayBtn>
    </Wrapper>
  );
};

export default DatePickerControls;
