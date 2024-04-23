import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css['profile-card']}>
      <div className={css['profile-card-main']}>
        <img className={css['profile-card-main-img']} src={image} alt={name} />
        <p className={css['profile-card-main-name']}>{name}</p>
        <p className={css['profile-card-main-text']}>@{tag}</p>
        <p className={css['profile-card-main-text']}>{location}</p>
      </div>

      <ul className={css['profile-card-info-list']}>
        <li className={css['profile-card-info-list-item']}>
          <span className={css['profile-card-info-list-item-title']}>
            Followers
          </span>
          <span className={css['profile-card-info-list-item-count']}>
            {followers}
          </span>
        </li>
        <li className={css['profile-card-info-list-item']}>
          <span className={css['profile-card-info-list-item-title']}>
            Views
          </span>
          <span className={css['profile-card-info-list-item-count']}>
            {views}
          </span>
        </li>
        <li className={css['profile-card-info-list-item']}>
          <span className={css['profile-card-info-list-item-title']}>
            Likes
          </span>
          <span className={css['profile-card-info-list-item-count']}>
            {likes}
          </span>
        </li>
      </ul>
    </div>
  );
}
