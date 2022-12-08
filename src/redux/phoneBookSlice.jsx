import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './phoneBookOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}
function isPendingAction(action) {
  return action.type.endsWith('pending');
}

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    changeSearchQuery(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [payload, ...state.contacts.items];
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => payload !== id
        );
        state.contacts.isLoading = false;
      })
      .addMatcher(isPendingAction, (state, { payload }) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addMatcher(isRejectedAction, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const { changeSearchQuery } = phoneBookSlice.actions;
