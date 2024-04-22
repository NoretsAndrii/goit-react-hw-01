import './Profile.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-main">
        <img className="profile-card-main-img" src={image} alt={name} />
        <p className="profile-card-main-name">{name}</p>
        <p className="profile-card-main-text">@{tag}</p>
        <p className="profile-card-main-text">{location}</p>
      </div>

      <ul className="profile-card-info-list">
        <li className="profile-card-info-list-item">
          <span className="profile-card-info-list-item-title">Followers</span>
          <span className="profile-card-info-list-item-count">
            {stats.followers}
          </span>
        </li>
        <li className="profile-card-info-list-item">
          <span className="profile-card-info-list-item-title">Views</span>
          <span className="profile-card-info-list-item-count">
            {stats.views}
          </span>
        </li>
        <li className="profile-card-info-list-item">
          <span className="profile-card-info-list-item-title">Likes</span>
          <span className="profile-card-info-list-item-count">
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
