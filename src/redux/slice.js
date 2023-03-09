import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== payload),
      };
    },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filter } = contactsSlice.actions;
