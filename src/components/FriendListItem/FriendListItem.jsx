import css from './FriendListItem.module.css';


export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <>
  <img src={avatar} alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</>
    )
}