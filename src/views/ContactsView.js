import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactsView.module.css';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';
import phonebook from '../img/icon.png';
import actions from '../redux/contacts/contacts-actions.js';
import {
  fetchContacts,
  addContact,
} from '../redux/contacts/contacts-operations';
import {
  getFilter,
  getContacts,
  getLoading,
} from '../redux/contacts/contacts-selectors';

export default function ContactsView() {
  const dispatch = useDispatch();
  const items = useSelector(state => getContacts(state));
  const filter = useSelector(state => getFilter(state));
  const isLoading = useSelector(state => getLoading(state));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = (name, number) => {
    if (items.find(item => item.name === name)) {
      alert(`Inputed ${name} is already in the contacts`);
      return;
    }

    return dispatch(addContact({ name, number }));
  };

  const handleFilterContacts = e => {
    return dispatch(actions.contactsFilter(e.currentTarget.value));
  };

  const getFilteredContacts = () => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.main_title_container}>
          <img
            className={styles.main_title_img}
            src={phonebook}
            alt="phonebook-icon"
          />
          <h1 className={styles.main_title}>Phonebook</h1>
        </div>

        <ContactForm onSubmit={addNewContact} />

        <div className={styles.main_loader_container}>
          {isLoading && <Loader />}
        </div>
        <h2 className={styles.title}>Contacts</h2>
        <Filter value={filter} onFilterChange={handleFilterContacts} />
        <ContactList items={getFilteredContacts()} />
      </div>
    </>
  );
}
