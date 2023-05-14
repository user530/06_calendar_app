import Wrapper from '../assets/wrappers/TodayInterviewBtn';
import { useAppContext } from '../context';
import { getDateRange } from '../utils';

const TodayInterviewBtn = () => {
  const { setDateRange } = useAppContext();

  const todayInterviewClick = () => {
    setDateRange(getDateRange(new Date()));
  };

  return <Wrapper onClick={todayInterviewClick}>Today</Wrapper>;
};

export default TodayInterviewBtn;
