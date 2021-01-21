import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendItem from './FriendListItem';

function FriendList({ friends = [] }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <FriendItem
            status={friend.isOnline ? s.statusOnline : s.statusNotOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
