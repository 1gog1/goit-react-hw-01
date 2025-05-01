import css from './App.module.css';
import Profile from '../Profile/Profile'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

import user from "../../userData.json";
import friends from "../../friends.json";
import items from "../../transactions.json";


export default function App  ()  {
  return (
    <div className={css.app}>
      <Profile
    name={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};







// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React = Love</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }




