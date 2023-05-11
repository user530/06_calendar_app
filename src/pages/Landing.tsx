import Wrapper from '../assets/wrappers/LandingPage';
import { CalendarBody, CalendarFooter, CalendarHeader } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <CalendarHeader />
      <CalendarBody />
      <CalendarFooter />
    </Wrapper>
  );
};

export default Landing;
