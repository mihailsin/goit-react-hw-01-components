import propTypes from 'prop-types';
import {
  Card,
  Thumb,
  Stats,
  Item,
  Title,
  Picture,
  Name,
  Info,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Thumb>
        <Picture src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Thumb>

      <Stats>
        <Item>
          <Title>Followers</Title>
          <span>{stats.followers}</span>
        </Item>
        <Item>
          <Title>Views</Title>
          <span>{stats.views}</span>
        </Item>
        <Item>
          <Title>Likes</Title>
          <span>{stats.likes}</span>
        </Item>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};
