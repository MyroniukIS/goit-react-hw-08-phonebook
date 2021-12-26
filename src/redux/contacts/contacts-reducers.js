import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './contacts-actions.js';
import { fetchContacts, addContact, delContact } from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,

  [delContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [addContact.fulfilled]: (state, { payload }) => {
    return [payload, ...state];
  },
});

const filter = createReducer('', {
  [actions.contactsFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { error }) => console.log(error),
  [fetchContacts.pending]: null,

  [addContact.rejected]: (_, { error }) => console.log(error),
  [addContact.pending]: null,

  [delContact.rejected]: (_, { error }) => console.log(error),
  [delContact.pending]: null,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [delContact.pending]: () => true,
  [delContact.fulfilled]: () => false,
  [delContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  error,
  isLoading,
});
