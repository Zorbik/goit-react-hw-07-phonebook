import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../services/phoneBookAPI';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const setError = (state, { payload }) => {
  state.contacts = {
    ...state.contacts,
    isLoading: false,
    error: payload,
  };
};

const setPending = state => {
  state.contacts = {
    ...state.contacts,
    isLoading: true,
    error: null,
  };
};

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addNewContact(state, { payload }) {
      const { items } = state.contacts;
      state.contacts = {
        ...state.contacts,
        items: [...items, payload],
      };
    },

    delContact(state, { payload }) {
      state.contacts = {
        items: state.contacts.items.filter(({ id }) => payload !== id),
      };
    },

    changeSearchQuery(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: setPending,
    [deleteContact.pending]: setPending,
    [addContact.pending]: setPending,

    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = {
        ...state.contacts,
        isLoading: false,
        items: payload,
      };
    },
    [addContact.fulfilled]: (state, _) => {
      state.contacts = {
        ...state.contacts,
        isLoading: false,
      };
    },
    [fetchContacts.rejected]: setError,
    [deleteContact.rejected]: setError,
    [addContact.rejected]: setError,
  },
});

export const { addNewContact, delContact, changeSearchQuery } =
  phoneBookSlice.actions;
