import Wrapper from '../assets/wrappers/TimeStamp';

interface ITimeStamp {
  stamp: number;
}

const TimeStamp = (props: ITimeStamp) => {
  const { stamp } = props;

  return (
    <Wrapper>
      <span>{`${stamp}:00`}</span>
    </Wrapper>
  );
};

export default TimeStamp;
