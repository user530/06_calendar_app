import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 3px;

  & + & {
    border-left: 1.5px solid #cecece;
  }
`;

export const InnerCell = styled.span`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
`;

InnerCell.defaultProps = {
  theme: {
    backgroundColor: 'transparent',
  },
};

export const filledTheme = {
  backgroundColor: '#ebecff',
};

export const selectedTheme = {
  backgroundColor: '#B3B7FF',
};

export default Wrapper;
