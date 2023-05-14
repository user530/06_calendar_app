import Wrapper, { InnerStamp } from '../assets/wrappers/TimeStamp';

interface ITimeStamp {
  stamp: number;
}

const TimeStamp = (props: ITimeStamp) => {
  const { stamp } = props;

  return (
    <Wrapper>
      <InnerStamp>{`${stamp < 10 ? `0${stamp}` : stamp}:00`}</InnerStamp>
    </Wrapper>
  );
};

export default TimeStamp;
