import propTypes from 'prop-types';
import { Item, List, Indicator } from './FriendList.styled';
export const FriendList = ({ data }) => {
  return (
    <List>
      {data.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Indicator>{isOnline}</Indicator>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  data: propTypes.array.isRequired,
};
