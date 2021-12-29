import { useDispatch, useSelector } from 'react-redux';
import { getUsername, getUseremail } from 'redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const email = useSelector(getUseremail);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Hello, {name}!</span>
      <span className={styles.email}>{email}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
