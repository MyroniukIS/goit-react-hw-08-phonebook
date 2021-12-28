import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { getIsloggedIn } from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsloggedIn);

  return (
    <header className={styles.header_wrap}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
