import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://61c230289dbcca0017c823b2.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get('contacts');
    return response.data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async dscr => {
    const item = {
      name: dscr.name,
      phone: dscr.phone,
    };
    const response = await axios.post('contacts', item);
    return response.data;
  },
);

export const delContact = createAsyncThunk('contacts/delContact', async id => {
  await axios.delete(`contacts/${id}`);
  return id;
});
