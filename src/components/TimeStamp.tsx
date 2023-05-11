import Wrapper from '../assets/wrappers/TimeStamp';

interface ITimeStamp {
  stamp: string;
}

const TimeStamp = (props: ITimeStamp) => {
  const { stamp } = props;

  return (
    <Wrapper>
      <span>{stamp}</span>
    </Wrapper>
  );
};

export default TimeStamp;
