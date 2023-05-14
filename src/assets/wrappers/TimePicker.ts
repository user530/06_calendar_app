import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 415px);
  padding-top: 10px;
  max-height: 900px;
  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(200, 200, 200, 0.5) rgba(255, 0, 0, 0.5);

  &::-webkit-scrollbar {
    display: block;

    width: 5px;
    height: 20px;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 0, 0, 0.5);
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(200, 200, 200, 0.5);
  }

  @media (max-width: 767px) {
    height: calc(100vh - 210px);
  }
`;

export default Wrapper;
