import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem ({status, avatar, name = 'Аноним'}) {
    return (
    <div className={s.itemDiv}>
        <span className={status}></span>
        <img className={s.avatar} src={avatar} alt="" width="48" height="48" />
        <p className={s.name}>{name}</p>
    </div>
)}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired
}

export default FriendListItem;