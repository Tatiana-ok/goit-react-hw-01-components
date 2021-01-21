import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultImg from '../image/default.png';

function Profile({
  avatar = defaultImg,
  name = 'Аноним',
  tag = 'unknown',
  location = 'Unknown',
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}> @{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.items}>
          <span className={s.label}>Followers: </span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.items}>
          <span className={s.label}>Views: </span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.items}>
          <span className={s.label}>Likes: </span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
