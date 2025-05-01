import css from './Profile.module.css'

export default function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div className={css.profile}>
  <div className={css.profileDescription}>
    <img className={css.profileAvatar}
      src={avatar}
      alt={`${name} avatar`}
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileTag}>{tag}</p>
    <p className={css.profileTag}>{location}</p>
  </div>

  <ul className={css.profileStats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
 )

}