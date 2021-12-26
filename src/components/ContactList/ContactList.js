import styles from './ContactList.module.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { delContact } from 'redux/contacts/contacts-operations';

function ContactList({ items }) {
  const dispatch = useDispatch();

  const contactsList = items.map(({ id, name, phone }) => (
    <li className={styles.item} key={id}>
      <div>
        <span className={styles.item_text}>
          {name}: {phone}
        </span>
        <button
          className={styles.item_button}
          id={id}
          type="button"
          onClick={() => dispatch(delContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return <ul className={styles.list}>{contactsList}</ul>;
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactList;
