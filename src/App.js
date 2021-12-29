import './App.css';
import { Gallery } from './components/Gallery/Gallery';
import { Profile } from './components/Profile/Profile';
import { Stats } from './components/Stats/Stats';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import statistics from './data/statistics.json';
import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
function App() {
  return (
    <Gallery>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Stats title="UPLOAD STATS" stats={statistics} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </Gallery>
  );
}

export default App;
