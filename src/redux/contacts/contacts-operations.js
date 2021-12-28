import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://61c230289dbcca0017c823b2.mockapi.io/';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('contacts');
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async dscr => {
    const item = {
      name: dscr.name,
      number: dscr.number,
    };
    const { data } = await axios.post('contacts', item);
    return data;
  },
);

export const delContact = createAsyncThunk('contacts/delContact', async id => {
  await axios.delete(`contacts/${id}`);
  return id;
});
