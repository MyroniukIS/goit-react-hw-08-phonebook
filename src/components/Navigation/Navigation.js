import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { getIsloggedIn } from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsloggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        HOME
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
