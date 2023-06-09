import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 72.5px;

  & + & {
    border-top: 1.5px solid #cecece;
  }

  @media (max-width: 767px) {
    height: 45px;
  }
`;

export default Wrapper;
