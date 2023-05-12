import { useAppContext } from '../context';
import { getDateRange } from '../utils';

const TodayInterviewBtn = () => {
  const { setDateRange } = useAppContext();

  const todayInterviewClick = () => {
    console.log('Today interview click!');
    setDateRange(getDateRange(new Date()));
  };

  return <button onClick={todayInterviewClick}>Today</button>;
};

export default TodayInterviewBtn;
