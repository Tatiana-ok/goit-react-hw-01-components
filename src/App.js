// import logo from './logo.svg';
import Profile from './Profile/Profile';
import user from './data/user.json';
import './App.css';

import statisticalData from './data/statistical-data.json';
import StatisticList from './StatisticList/StatisticList';
import StatisticsSection from './StatisticsSection/StatisticsSection';

import FriendList from './FriendList/FriendList';
import friends from './data/friends.json';

import transactions from './data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsSection title="Upload stats">
        <StatisticList stats={statisticalData} />
      </StatisticsSection>
      <StatisticsSection>
        <StatisticList stats={statisticalData} />
      </StatisticsSection>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
