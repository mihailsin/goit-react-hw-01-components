import logo from './logo.svg';
import './App.css';
import { Profile } from './components/Profile';
import user from './data/user.json';
console.log(user);
function App() {
  return (
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}

export default App;
