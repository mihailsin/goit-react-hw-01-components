import { Wrapper, Indicators, Item, Title } from './Stats.styled';
export const Stats = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <Indicators>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </Item>
          );
        })}
      </Indicators>
    </Wrapper>
  );
};
