import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img
        className={css['friend-list-item-img']}
        src={avatar}
        alt={name}
        width="48"
      />
      <p>{name}</p>
      <p className={isOnline ? css.green : css.red}>
        {isOnline ? 'Online' : ' Offline'}
      </p>
    </>
  );
}
