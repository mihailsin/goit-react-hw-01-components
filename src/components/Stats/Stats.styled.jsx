import styled from 'styled-components';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = getRandomHexColor();

export const Wrapper = styled.div``;
export const Title = styled.h2`
  text-align: center;
`;
export const Indicators = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
export const Item = styled.li`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  list-style: none;

  &:nth-child(even) {
    background-color: ${color};
  }
`;
