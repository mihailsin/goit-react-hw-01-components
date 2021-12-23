import { Card, Thumb, Stats, Item, Title, Picture, Name, Info } from "./Profile.styled"
export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => { 
    return (
        <Card>
  <Thumb>
    <Picture
      src={avatar}
      alt="User avatar"
      
    />
                <Name>{username}</Name>
                <Info>@{tag}</Info>
                <Info>{location}</Info>
  </Thumb>

  <Stats>
    <Item>
      <Title>Followers</Title>
                    <span>{followers}</span>
    </Item>
    <Item>
      <Title>Views</Title>
                   <span>{views}</span>
    </Item>
    <Item>
      <Title>Likes</Title>
                    <span>{likes}</span>
    </Item>
  </Stats>
</Card>
    )
}

