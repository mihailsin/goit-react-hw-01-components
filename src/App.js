import logo from './logo.svg';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { Stats } from './components/Stats/Stats';
import statistics from './data/statistics.json';
import user from './data/user.json';
console.log(user);
function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Stats title="UPLOAD STATS" stats={statistics} />
    </div>
  );
}

export default App;
