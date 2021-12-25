import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Indicator = styled.span`
  margin-right: 20px;
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;

    background-color: ${prop => {
      return prop.children === true ? '#4cdb14' : '#ff0000';
    }};
    border-radius: 50%;
  }
`;
