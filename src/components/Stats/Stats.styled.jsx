import { element } from 'prop-types';
import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/hexColorGenerator';
export const Wrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;
export const Title = styled.h2`
  text-align: center;
`;
export const Indicators = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Item = styled.li`
  display: grid;
  grid-template-rows: repeat(2, 1fr, 2fr);
  justify-items: center;
  align-items: end;
  list-style: none;
`;

export const Sector = styled.span`
  background-color: ${props => {
    return getRandomHexColor();
  }};
  height: ${props => {
    return `${props.children[0] * 5}px`;
  }};
  color: #ffffff;
`;
