import React, { useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import phonebook from './img/icon.png';
import { useSelector, useDispatch } from 'react-redux';
import actions from './redux/contacts/contacts-actions.js';
import {
  fetchContacts,
  addContact,
} from './redux/contacts/contacts-operations';
import {
  getFilter,
  getContacts,
  getLoading,
} from './redux/contacts/contacts-selectors';
import Loader from './components/Loader/Loader';

export default function App() {
  const items = useSelector(state => getContacts(state));
  const filter = useSelector(state => getFilter(state));
  const isLoading = useSelector(state => getLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

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
    <div className="main_container">
      <div className="main_title_container">
        <img className="main_title_img" src={phonebook} alt="phonebook-icon" />
        <h1 className="main_title">Phonebook</h1>
      </div>

      <ContactForm onSubmit={addNewContact} />

      <div className="main_loader-container">{isLoading && <Loader />}</div>
      <h2 className="title">Contacts</h2>
      <Filter value={filter} onFilterChange={handleFilterContacts} />
      <ContactList items={getFilteredContacts()} />
    </div>
  );
}
