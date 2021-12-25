import propTypes from 'prop-types';
import { Wrapper, Indicators, Item, Title, Sector } from './Stats.styled';
export const Stats = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <Indicators>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span>{label}</span>
              <Sector>{percentage}%</Sector>
            </Item>
          );
        })}
      </Indicators>
    </Wrapper>
  );
};

Stats.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired,
};
