import Wrapper from '../assets/wrappers/Timeline';
import { TimeStamp } from '../components';

interface ITimeline {
  timeline: number[];
}

const Timeline = (props: ITimeline) => {
  const { timeline } = props;

  return (
    <Wrapper>
      {timeline.map((timestamp, ind) => (
        <TimeStamp key={ind} stamp={timestamp} />
      ))}
    </Wrapper>
  );
};

export default Timeline;
